import React, { useState } from "react";

const InputComponent = ({ inputName, setInputName }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-5">InputComponent</h1>
      <input
        type="text"
        placeholder="Please Enter Your Name"
        className="p-2 border rounded my-5"
        onChange={(e) => setInputName(e.target.value)}
        value={inputName}
      />
    </div>
  );
};

export default InputComponent;
