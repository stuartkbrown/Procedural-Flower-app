import React from "react";
import {
  useAxesVisibility,
  useBackgroundColour,
  useFlowerParameters,
  useMaterial,
} from "./Context";
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
  const { backgroundColour } = useBackgroundColour();
  const { axesVisible } = useAxesVisibility();

  return (
    <div class="webgl" className="absolute top-0 left-0 z-10 w-full h-full">
      <Canvas
        style={{ background: backgroundColour }}
        camera={{ fov: 75, near: 0.1, far: 8000, position: [0, 0, 550] }}
        gl={{ antialias: false, alpha: true, powerPreference: "default" }}
        flat
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FlowerGeometry parameters={flowerParams} materialType={materialType} />
        {axesVisible && <axesHelper args={[500]} />}
        <GizmoHelper alignment="bottom-left" margin={[80, 80]}>
          <GizmoViewport />
        </GizmoHelper>
        <Stats />
        <OrbitControls enableDamping dampingFactor={0.25} />
      </Canvas>
    </div>
  );
};

export default Scene;
