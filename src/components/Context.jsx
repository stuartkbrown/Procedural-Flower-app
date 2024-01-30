import React, { createContext, useContext, useState } from "react";

const FlowerParametersContext = createContext();

export const useFlowerParameters = () => useContext(FlowerParametersContext);

export const FlowerParametersProvider = ({ children }) => {
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

  const updateParam = (paramName, value) => {
    setFlowerParams((prevState) => ({
      ...prevState,
      [paramName]: value,
    }));
  };

  return (
    <FlowerParametersContext.Provider value={{ flowerParams, updateParam }}>
      {children}
    </FlowerParametersContext.Provider>
  );
};

const MaterialContext = createContext();

export const MaterialProvider = ({ children }) => {
  const [materialType, setMaterialType] = useState("triangles");

  return (
    <MaterialContext.Provider value={{ materialType, setMaterialType }}>
      {children}
    </MaterialContext.Provider>
  );
};

export const useMaterial = () => {
  const context = useContext(MaterialContext);
  if (!context) {
    throw new Error("useMaterialType must be used within a MaterialProvider");
  }
  return context;
};
