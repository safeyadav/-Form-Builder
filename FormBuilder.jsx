import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';

const FormBuilder = () => {
  const [formElements, setFormElements] = useState([]);

  const addElement = (element) => {
    setFormElements([...formElements, element]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <h1>Drag-and-Drop Form Builder</h1>
        <div>
          {formElements.map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default FormBuilder;
