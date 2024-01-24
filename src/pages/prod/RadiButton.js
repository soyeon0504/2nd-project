import React from "react";
import { LadelButton } from "../../styles/productsStyle";

const RadioButton = ({ name, value, checked, onChange }) => {
  return (
    <LadelButton>
      <label>
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
        />

        {value}
      </label>
    </LadelButton>
  );
};

export default RadioButton;
