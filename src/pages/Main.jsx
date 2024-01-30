import React from "react";
import Navbar from "../components/Navbar";
import {
  FlowerParametersProvider,
  MaterialProvider,
} from "../components/Context";
import Scene from "../components/Scene";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const Main = () => {
  return (
    <div>
      <FlowerParametersProvider>
        <MaterialProvider>
          <Navbar />
          <Scene />
          <Leftbar />
          <Rightbar />
        </MaterialProvider>
      </FlowerParametersProvider>
    </div>
  );
};

export default Main;
