import React from "react";
import Dropdown from "./Dropdown";
import { useMaterial } from "./Context";

const options = [
  { label: "Triangles", value: "triangles" },
  { label: "Points", value: "points" },
  { label: "Wireframe", value: "wireframe" },
  { label: "Phong", value: "phong" },
  { label: "Standard", value: "standard" },
];

const MaterialDropdown = () => {
  const { materialType, setMaterialType } = useMaterial();

  const handleMaterialChange = (newValue) => {
    setMaterialType(newValue);
  };

  return (
    <div>
      <label>Material:</label>
      <Dropdown
        options={options}
        value={materialType}
        onChange={handleMaterialChange}
      />
    </div>
  );
};

export default MaterialDropdown;
