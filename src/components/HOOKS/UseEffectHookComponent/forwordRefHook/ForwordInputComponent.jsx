import React from 'react';
import { useId } from 'react';

const ForwordInputComponent = ({ type, label, ref }) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} ref={ref} />
    </div>
  );
};

export default ForwordInputComponent;
