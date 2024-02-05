import React from "react";
import FlowerParameters from "./FlowerParameters";
import { useRandomiseParams } from "../hooks/useRandomiseParams";
import Button from "./Button";

const Rightbar = () => {
  const randomiseParams = useRandomiseParams();
  const randomise = () => {
    randomiseParams();
  };
  return (
    <div class="controls-right">
      <div class="controls-heading">
        <Button onClick={randomise}>Randomise</Button>
        Flower Parameters
      </div>
      <FlowerParameters />
    </div>
  );
};

export default Rightbar;
