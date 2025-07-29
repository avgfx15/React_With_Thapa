import React, { useState } from "react";
import InputComponent from "./InputComponent";
import DisplayComponent from "./DisplayComponent";

const LiftingState = () => {
  const [inputName, setInputName] = useState("");

  return (
    <div className="flex flex-col items-center justify-center my-10  bg-gray-300">
      <InputComponent inputName={inputName} setInputName={setInputName} />
      <DisplayComponent inputName={inputName} />
    </div>
  );
};

export default LiftingState;
