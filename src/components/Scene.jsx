import React, { useEffect, useMemo, useRef } from "react";
import { useFlowerParameters, useMaterial } from "./Context";
import { Canvas } from "@react-three/fiber";
import {
  Stats,
  OrbitControls,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";
import FlowerGeometry from "./FlowerGeometry";

const Scene = () => {
  const { flowerParams } = useFlowerParameters();
  const { materialType } = useMaterial();

  return (
    <div class="webgl" className="absolute top-0 left-0 z-10 w-full h-full">
      <Canvas
        camera={{ fov: 75, near: 0.1, far: 8000, position: [0, 0, 550] }}
        gl={{ antialias: false, alpha: false, powerPreference: "default" }}
        flat
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FlowerGeometry parameters={flowerParams} materialType={materialType} />
        <GizmoHelper alignment="bottom-left" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <Stats />
        <OrbitControls enableDamping dampingFactor={0.08} />
      </Canvas>
    </div>
  );
};

export default Scene;
