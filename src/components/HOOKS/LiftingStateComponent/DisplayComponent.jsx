import React from "react";

const DisplayComponent = ({ inputName }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold my-5">Display Component</h1>
      <h2>{inputName}</h2>
    </div>
  );
};

export default DisplayComponent;
