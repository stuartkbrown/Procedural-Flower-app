import React, { Suspense } from "react";
import { useFlowerParameters } from "./Context";
import { Canvas } from "@react-three/fiber";
import { Stats, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import FlowerGeometry from "./FlowerGeometry";

const Scene = () => {
  const { flowerParams, updateParam } = useFlowerParameters();
  return (
    <div class="webgl" className="absolute top-0 left-0 z-10 w-full h-full">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 550]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <FlowerGeometry parameters={flowerParams} />
        <OrbitControls />
        <Stats />
      </Canvas>
    </div>
  );
};

export default Scene;
