import React from "react";
import Navbar from "../components/Navbar";
import { FlowerParametersProvider } from "../components/Context";
import WebGLCanvas from "../components/WebGLCanvas";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const ProceduralFlower = () => {
  return (
    <div>
      <Navbar />
      <FlowerParametersProvider>
        <WebGLCanvas />
        <Leftbar />
        <Rightbar />
      </FlowerParametersProvider>
    </div>
  );
};

export default ProceduralFlower;
