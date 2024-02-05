import React from "react";
import Button from "./Button";
import MaterialDropdown from "./MaterialDropdown";
import ColourPicker from "./ColourPicker";
import { useAxesVisibility, useBackgroundColour } from "./Context";

const Leftbar = () => {
  const { backgroundColour, setBackgroundColour } = useBackgroundColour();
  const refresh = () => {
    window.location.reload();
  };
  const { toggleAxesHelper } = useAxesVisibility();
  return (
    <div class="controls">
      <div class="controls-heading">Controls</div>
      <div class="control-group">
        <Button onClick={refresh}>Reset Default</Button>
      </div>
      <ColourPicker
        id="backgroundColourPicker"
        label="Background Colour"
        value={backgroundColour}
        setValue={(value) => setBackgroundColour(value)}
        showCheckbox={false}
      />
      <div class="control-group">
        <MaterialDropdown />
      </div>
      <div class="control-group">
        <Button onClick={toggleAxesHelper}>Cartesian Axes</Button>
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
