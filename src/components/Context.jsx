import React, { createContext, useContext, useState } from "react";

const FlowerParametersContext = createContext();
const MaterialContext = createContext();
const BackgroundColourContext = createContext();
const AxesVisibilityContext = createContext();

export const useFlowerParameters = () => useContext(FlowerParametersContext);
export const useMaterial = () => useContext(MaterialContext);
export const useBackgroundColour = () => useContext(BackgroundColourContext);
export const useAxesVisibility = () => useContext(AxesVisibilityContext);

export const MainProvider = ({ children }) => {
  const [flowerParams, setFlowerParams] = useState({
    flowerColour1: "#ff0000",
    flowerColour2: "#0000ff",
    verticalResolution: 60,
    radialResolution: 360,
    petalNumber: 5,
    diameter: 180,
    petalLength: 50,
    petalSharpness: 0.4,
    height: 300,
    curvature1: 0.8,
    curvature2: 0.15,
    bumpiness: 2.5,
    bumpNumber: 10,
  });

  const [materialType, setMaterialType] = useState("triangles");

  const [backgroundColour, setBackgroundColour] = useState("#000000");

  const updateParam = (paramName, value) => {
    const isCheckboxChecked = document.getElementById(`${paramName}Check`)
      .checked;
    if (isCheckboxChecked) {
      return;
    }

    setFlowerParams((prevState) => ({
      ...prevState,
      [paramName]: value,
    }));
  };

  const [axesVisible, setAxesVisible] = useState(false);

  const toggleAxesHelper = () => {
    setAxesVisible((prevVisible) => !prevVisible);
  };

  return (
    <FlowerParametersContext.Provider value={{ flowerParams, updateParam }}>
      <MaterialContext.Provider value={{ materialType, setMaterialType }}>
        <BackgroundColourContext.Provider
          value={{ backgroundColour, setBackgroundColour }}
        >
          <AxesVisibilityContext.Provider
            value={{ axesVisible, toggleAxesHelper }}
          >
            {children}
          </AxesVisibilityContext.Provider>
        </BackgroundColourContext.Provider>
      </MaterialContext.Provider>
    </FlowerParametersContext.Provider>
  );
};
