import React from "react";
import Button from "./Button";

const Leftbar = () => {
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
      <div class="control-group">
        <label>Background Color:</label>
        <input type="color" id="backgroundColorPicker" />
      </div>
      <div class="control-group">
        <label>Display Mode</label>
        <select id="displayModeDropdown">
          <option value="triangles">Triangles</option>
          <option value="points">Points</option>
          <option value="wireframe">Wireframe</option>
          <option value="phong">Phong</option>
          <option value="standard">Standard</option>
        </select>
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
