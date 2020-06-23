import React from "react";

import "./CustomInput.styles.scss";

const CustomInput = ({ handleChange, label, ...otherProps }) => {
  return <input className="form-input" onChange={handleChange} {...otherProps} />;
};

export default CustomInput;
