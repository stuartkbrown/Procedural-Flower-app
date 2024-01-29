import React, { useRef, useEffect, useMemo } from "react";
import { DoubleSide } from "three";
import * as THREE from "three";

const FlowerGeometry = ({ parameters }) => {
  const geometryRef = useRef();

  const positions = useMemo(() => calculatePositions(parameters), [parameters]);
  const colors = useMemo(() => calculateColors(parameters), [parameters]);
  const indices = useMemo(() => calculateIndices(parameters), [parameters]);

  useEffect(() => {
    forceUpdate();
  }, []);

  const forceUpdate = () => {
    if (geometryRef.current) {
      geometryRef.current.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      );
      geometryRef.current.setAttribute(
        "color",
        new THREE.BufferAttribute(colors, 3)
      );
      geometryRef.current.setIndex(new THREE.BufferAttribute(indices, 1));
    }
  };

  // Update geometry's buffer attributes when parameters change
  useEffect(() => {
    forceUpdate();
  }, [parameters]);

  return (
    <mesh>
      <bufferGeometry ref={geometryRef} />
      <meshBasicMaterial vertexColors side={DoubleSide} />
    </mesh>
  );
};

function calculatePositions(parameters) {
  const { verticalResolution, radialResolution } = parameters;
  const positions = [];

  for (let theta = 0; theta < verticalResolution; theta++) {
    for (let phi = 0; phi < radialResolution; phi++) {
      const vertex = calculateVertex(theta, phi, parameters);
      positions.push(vertex.x, vertex.y, vertex.z);
    }
  }

  return new Float32Array(positions);
}

function calculateColors(parameters) {
  const { verticalResolution, flowerColour1, flowerColour2 } = parameters;
  const colors = [];

  const flowerColor1 = new THREE.Color(flowerColour1);
  const flowerColor2 = new THREE.Color(flowerColour2);

  for (let theta = 0; theta < verticalResolution; theta++) {
    const t = theta / verticalResolution; // Normalize theta to [0, 1]

    for (let phi = 0; phi < parameters.radialResolution; phi++) {
      const lerpedColor = flowerColor1.clone().lerp(flowerColor2, t);
      colors.push(lerpedColor.r, lerpedColor.g, lerpedColor.b);
    }
  }

  return new Float32Array(colors);
}

function calculateIndices(parameters) {
  const { verticalResolution, radialResolution } = parameters;
  const indices = [];

  for (let theta = 0; theta < verticalResolution - 1; theta++) {
    for (let phi = 0; phi < radialResolution - 1; phi++) {
      const v1 = theta * radialResolution + phi;
      const v2 = (theta + 1) * radialResolution + phi;
      const v3 = (theta + 1) * radialResolution + phi + 1;
      const v4 = theta * radialResolution + phi + 1;

      indices.push(v1, v2, v3);
      indices.push(v1, v3, v4);
    }

    const lastColumnV1 = theta * radialResolution + radialResolution - 1;
    const lastColumnV2 = (theta + 1) * radialResolution + radialResolution - 1;
    const firstColumnV1 = theta * radialResolution;
    const firstColumnV2 = (theta + 1) * radialResolution;

    indices.push(lastColumnV1, lastColumnV2, firstColumnV1);
    indices.push(lastColumnV2, firstColumnV1, firstColumnV2);
  }

  return new Uint16Array(indices);
}

function calculateVertex(theta, phi, parameters) {
  const normalizedPhi = (phi / parameters.radialResolution) * 2 * Math.PI;
  const r =
    (((parameters.petalLength *
      Math.pow(
        Math.abs(Math.sin((normalizedPhi * parameters.petalNumber) / 2)),
        parameters.petalSharpness
      ) +
      parameters.diameter) *
      theta) /
      parameters.verticalResolution /
      60) *
    60;
  const x = r * Math.cos(normalizedPhi);
  const y = r * Math.sin(normalizedPhi);

  const z =
    vShape(
      parameters.height,
      r / 100,
      parameters.curvature1,
      parameters.curvature2
    ) -
    200 +
    perturbation(
      parameters.bumpiness,
      r / 100,
      parameters.bumpNumber,
      normalizedPhi
    );

  return new THREE.Vector3(x, y, z);
}

function vShape(A, r, a, b) {
  return (
    A *
    Math.pow(Math.E, -b * Math.pow(Math.abs(r), 1.5)) *
    Math.pow(Math.abs(r), a)
  );
}

function perturbation(A, r, p, angle) {
  return 1 + A * Math.pow(r, 2) * Math.sin(p * angle);
}

export default FlowerGeometry;
