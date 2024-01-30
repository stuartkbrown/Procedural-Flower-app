import React, { useContext, useState } from "react";
import Button from "./Button";
import MaterialDropdown from "./MaterialDropdown";
import ColourPicker from "./ColourPicker";
import { useBackgroundColour } from "./Context";

const Leftbar = () => {
  const { backgroundColour, setBackgroundColour } = useBackgroundColour();
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div class="controls">
      <div class="controls-heading">Controls</div>
      <div class="control-group">
        <Button onClick={handleClick}>Reset Default</Button>
        <button id="resetCameraButton">Reset Camera</button>
      </div>
      <div class="control-group">
        <button id="randomiseButton">Randomise</button>
        <label>Keep Resolution</label>
        <input type="checkbox" id="keepResolutionCheckbox" />
      </div>
      <ColourPicker
        id="backgroundColourPicker"
        label="Background Colour:"
        value={backgroundColour}
        setValue={(value) => setBackgroundColour(value)}
      />
      <div class="control-group">
        <MaterialDropdown />
      </div>
      <div class="control-group">
        <button id="toggleAxesButton">Cartesian Axes</button>
        <button id="toggleRadialAxesButton">Radial Axes</button>
      </div>
      <div class="controls-heading">Presets</div>
      <div class="control-group">
        <button id="hibiscusButton">Hibiscus</button>
        <button id="lilyButton">Lily</button>
        <button id="buttercupButton">Buttercup</button>
      </div>
      <div class="control-group">
        <button id="forgetMeNotButton">Forget-me-not</button>
        <button id="morningGloryButton">Morning Glory</button>
      </div>
    </div>
  );
};

export default Leftbar;
