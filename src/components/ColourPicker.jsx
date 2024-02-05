import React from "react";

const ColourPicker = ({ id, label, value, setValue, showCheckbox = true }) => {
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="control-group">
      {showCheckbox && <input type="checkbox" id={`${id}Check`} />}
      <label htmlFor={id}>{label}:</label>
      <input type="color" id={id} value={value} onChange={handleChange} />
    </div>
  );
};

export default ColourPicker;
