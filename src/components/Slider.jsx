import React from "react";

const Slider = ({ id, label, value, setValue, min, max, step }) => {
  const handleChange = (event) => {
    const newValue = parseFloat(event.target.value);
    setValue(newValue);
  };

  return (
    <div className="control-group">
      <input type="checkbox" id={`${id}Check`} />
      <label htmlFor={`${id}Slider`}>{label}:</label>
      <input
        type="range"
        id={`${id}Slider`}
        min={min}
        max={max}
        value={value}
        step={step}
        onChange={handleChange}
      />
      <output>{value}</output>
    </div>
  );
};

export default Slider;
