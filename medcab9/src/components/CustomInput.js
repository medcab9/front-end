import React from "react";

import "./CustomInput.styles.scss";

const CustomInput = ({ type, handleChange, label, ...otherProps }) => {
  return (
    <div>
      <input type={type} className="form-input" label={label} onChange={handleChange} {...otherProps} />
    </div>
  );
};

export default CustomInput;
