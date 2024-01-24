import React from "react";

const Rightbar = () => {
  return (
    <div class="controls-right">
      <div class="controls-heading">Parameters</div>

      <div class="control-group">
        <input type="checkbox" id="flowerColourPickerCheck" />
        <label for="flowerColourPicker">Flower Colour 1:</label>
        <input type="color" id="flowerColourPicker" value="#ff0000" />
      </div>

      <div class="control-group">
        <input type="checkbox" id="flowerColourPicker2Check" />
        <label for="flowerColourPicker2">Flower Colour 2:</label>
        <input type="color" id="flowerColourPicker2" value="#0000ff" />
      </div>

      <div class="control-group">
        <input type="checkbox" id="verticalResolutionCheck" />
        <label for="verticalResolutionSlider">Vertical Resolution:</label>
        <input
          type="range"
          id="verticalResolutionSlider"
          min="10"
          max="100"
          value="60"
          step="10"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>60</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="radialResolutionCheck" />
        <label for="radialResolutionSlider">Radial Resolution:</label>
        <input
          type="range"
          id="radialResolutionSlider"
          min="45"
          max="720"
          value="360"
          step="45"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>360</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="petalNumberCheck" />
        <label for="petalNumberSlider">Petal Number:</label>
        <input
          type="range"
          id="petalNumberSlider"
          min="1"
          max="20"
          value="5"
          step="1"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>5</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="diameterCheck" />
        <label for="diameterSlider">Diameter:</label>
        <input
          type="range"
          id="diameterSlider"
          min="20"
          max="250"
          value="180"
          step="10"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>180</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="petalLengthCheck" />
        <label for="petalLengthSlider">Petal Length:</label>
        <input
          type="range"
          id="petalLengthSlider"
          min="0"
          max="300"
          value="50"
          step="10"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>50</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="petalSharpnessCheck" />
        <label for="petalSharpnessSlider">Petal Sharpness:</label>
        <input
          type="range"
          id="petalSharpnessSlider"
          min="0.0"
          max="10.0"
          value="0.4"
          step="0.1"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>0.4</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="heightCheck" />
        <label for="heightSlider">Height:</label>
        <input
          type="range"
          id="heightSlider"
          min="0"
          max="600"
          value="300"
          step="10"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>300</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="curvature1Check" />
        <label for="curvature1Slider">Curvature 1:</label>
        <input
          type="range"
          id="curvature1Slider"
          min="0.0"
          max="4.0"
          value="0.8"
          step="0.1"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>0.8</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="curvature2Check" />
        <label for="curvature2Slider">Curvature 2:</label>
        <input
          type="range"
          id="curvature2Slider"
          min="0.0"
          max="1.0"
          value="0.15"
          step="0.05"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>0.15</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="bumpinessCheck" />
        <label for="bumpinessSlider">Bumpiness:</label>
        <input
          type="range"
          id="bumpinessSlider"
          min="0.0"
          max="5.0"
          value="2.5"
          step="0.5"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>2.5</output>
      </div>

      <div class="control-group">
        <input type="checkbox" id="bumpNumberCheck" />
        <label for="bumpNumberSlider">Bump Number:</label>
        <input
          type="range"
          id="bumpNumberSlider"
          min="0"
          max="20"
          value="10"
          step="1"
          oninput="this.nextElementSibling.value = this.value"
        />
        <output>10</output>
      </div>
    </div>
  );
};

export default Rightbar;
