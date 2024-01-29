import React from "react";
import Navbar from "../components/Navbar";
import { FlowerParametersProvider } from "../components/Context";
import Scene from "../components/Scene";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const Main = () => {
  return (
    <div>
      <Navbar />
      <FlowerParametersProvider>
        <Scene />
        <Leftbar />
        <Rightbar />
      </FlowerParametersProvider>
    </div>
  );
};

export default Main;
