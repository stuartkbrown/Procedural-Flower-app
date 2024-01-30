import React from "react";
import Navbar from "../components/Navbar";
import { MainProvider } from "../components/Context";
import Scene from "../components/Scene";
import Leftbar from "../components/Leftbar";
import Rightbar from "../components/Rightbar";

const Main = () => {
  return (
    <div>
      <MainProvider>
        <Navbar />
        <Scene />
        <Leftbar />
        <Rightbar />
      </MainProvider>
    </div>
  );
};

export default Main;
