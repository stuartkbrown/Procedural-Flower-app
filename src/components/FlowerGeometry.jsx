import React, { useRef, useMemo } from "react";
import { DoubleSide } from "three";
import * as THREE from "three";

const FlowerGeometry = ({ parameters }) => {
  const positions = useRef([]);
  const colors = useRef([]);
  const indices = useRef([]);

  useMemo(() => {
    positions.current = calculatePositions(parameters);
    colors.current = calculateColors(parameters);
    indices.current = calculateIndices(parameters);
  }, [parameters]);

  return (
    <mesh>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions.current}
          count={positions.current.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors.current}
          count={colors.current.length / 3}
          itemSize={3}
        />
        <bufferAttribute
          attach="index"
          array={indices.current}
          count={indices.current.length}
          itemSize={1}
        />
      </bufferGeometry>
      <meshStandardMaterial vertexColors side={DoubleSide} />
    </mesh>
  );
};

// Function to calculate vertex positions based on parameters
const calculatePositions = (parameters) => {
  const positions = [];

  for (let theta = 0; theta < parameters.verticalResolution; theta += 1) {
    for (let phi = 0; phi < parameters.radialResolution; phi += 1) {
      const vertex = calculateVertex(theta, phi, parameters);
      positions.push(vertex.x, vertex.y, vertex.z);
    }
  }

  return new Float32Array(positions);
};

// Function to calculate vertex colors based on parameters
const calculateColors = (parameters) => {
  const colors = [];

  const flowerColor1 = new THREE.Color(parameters.flowerColour1);
  const flowerColor2 = new THREE.Color(parameters.flowerColour2);

  for (let theta = 0; theta < parameters.verticalResolution; theta += 1) {
    for (let phi = 0; phi < parameters.radialResolution; phi += 1) {
      const t = theta / parameters.verticalResolution; // Normalize phi to [0, 1]
      const lerpedColor = flowerColor1.clone().lerp(flowerColor2, t);
      colors.push(lerpedColor.r, lerpedColor.g, lerpedColor.b);
    }
  }

  return new Float32Array(colors);
};

// Function to calculate indices based on parameters
const calculateIndices = (parameters) => {
  const indices = [];

  for (let theta = 0; theta < parameters.verticalResolution - 1; theta += 1) {
    for (let phi = 0; phi < parameters.radialResolution - 1; phi += 1) {
      const v1 = theta * parameters.radialResolution + phi;
      const v2 = (theta + 1) * parameters.radialResolution + phi;
      const v3 = (theta + 1) * parameters.radialResolution + phi + 1;
      const v4 = theta * parameters.radialResolution + phi + 1;

      indices.push(v1, v2, v3);
      indices.push(v1, v3, v4);
    }

    const lastColumnV1 =
      theta * parameters.radialResolution + parameters.radialResolution - 1;
    const lastColumnV2 =
      (theta + 1) * parameters.radialResolution +
      parameters.radialResolution -
      1;
    const firstColumnV1 = theta * parameters.radialResolution;
    const firstColumnV2 = (theta + 1) * parameters.radialResolution;

    indices.push(lastColumnV1, lastColumnV2, firstColumnV1);
    indices.push(lastColumnV2, firstColumnV1, firstColumnV2);
  }

  return new Uint16Array(indices);
};

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

// Math functions
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
