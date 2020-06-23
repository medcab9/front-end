import React from "react";

import "./CustomInput.styles.scss";

const CustomInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div>
      <input className="form-input" onChange={handleChange} {...otherProps} />;
    </div>
  );
};

export default CustomInput;
