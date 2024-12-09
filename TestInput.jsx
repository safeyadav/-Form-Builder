import React from 'react';
// Each form element (text input, select, radio, etc.) here be its own component
const TextInput = ({ label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);

export default React.memo(TextInput);
