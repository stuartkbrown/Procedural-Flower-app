import React from "react";
import Slider from "./Slider";
import ColourPicker from "./ColourPicker";
import { useFlowerParameters } from "./Context";

const FlowerParameters = () => {
  const { flowerParams, updateParam } = useFlowerParameters();

  const {
    flowerColour1,
    flowerColour2,
    verticalResolution,
    radialResolution,
    petalNumber,
    diameter,
    petalLength,
    petalSharpness,
    height,
    curvature1,
    curvature2,
    bumpiness,
    bumpNumber,
  } = flowerParams;

  return (
    <>
      {/* Color pickers */}
      <ColourPicker
        id="flowerColour1"
        label="Flower Colour 1"
        value={flowerColour1}
        setValue={(value) => updateParam("flowerColour1", value)}
      />

      <ColourPicker
        id="flowerColour2"
        label="Flower Colour 2"
        value={flowerColour2}
        setValue={(value) => updateParam("flowerColour2", value)}
      />

      {/* Sliders */}
      <Slider
        id="verticalResolution"
        label="Vertical Resolution"
        value={verticalResolution}
        setValue={(value) => updateParam("verticalResolution", value)}
        min={10}
        max={100}
        step={10}
      />

      <Slider
        id="radialResolution"
        label="Radial Resolution"
        value={radialResolution}
        setValue={(value) => updateParam("radialResolution", value)}
        min={45}
        max={720}
        step={45}
      />

      <Slider
        id="petalNumber"
        label="Petal Number"
        value={petalNumber}
        setValue={(value) => updateParam("petalNumber", value)}
        min={1}
        max={20}
        step={1}
      />

      <Slider
        id="diameter"
        label="Diameter"
        value={diameter}
        setValue={(value) => updateParam("diameter", value)}
        min={20}
        max={250}
        step={10}
      />

      <Slider
        id="petalLength"
        label="Petal Length"
        value={petalLength}
        setValue={(value) => updateParam("petalLength", value)}
        min={0}
        max={300}
        step={10}
      />

      <Slider
        id="petalSharpness"
        label="Petal Sharpness"
        value={petalSharpness}
        setValue={(value) => updateParam("petalSharpness", value)}
        min={0.0}
        max={10.0}
        step={0.1}
      />

      <Slider
        id="height"
        label="Height"
        value={height}
        setValue={(value) => updateParam("height", value)}
        min={0}
        max={600}
        step={10}
      />

      <Slider
        id="curvature1"
        label="Curvature 1"
        value={curvature1}
        setValue={(value) => updateParam("curvature1", value)}
        min={0.0}
        max={4.0}
        step={0.1}
      />

      <Slider
        id="curvature2"
        label="Curvature 2"
        value={curvature2}
        setValue={(value) => updateParam("curvature2", value)}
        min={0.0}
        max={1.0}
        step={0.05}
      />

      <Slider
        id="bumpiness"
        label="Bumpiness"
        value={bumpiness}
        setValue={(value) => updateParam("bumpiness", value)}
        min={0.0}
        max={5.0}
        step={0.5}
      />

      <Slider
        id="bumpNumber"
        label="Bump Number"
        value={bumpNumber}
        setValue={(value) => updateParam("bumpNumber", value)}
        min={0}
        max={20}
        step={1}
      />
    </>
  );
};

export default FlowerParameters;
