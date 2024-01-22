import React from 'react';

const RadioButton = ({ name, value, checked, onChange }) => {
  return (
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
  );
};

export default RadioButton;
