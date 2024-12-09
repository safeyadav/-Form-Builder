import React from 'react';

const FormPreview = ({ formSchema }) => (
  <div>
    <h2>Form Preview</h2>
    {formSchema.map((field, index) => (
      <div key={index}>
        <label>{field.label}</label>
        <input type={field.type} />
      </div>
    ))}
  </div>
);

export default FormPreview;
