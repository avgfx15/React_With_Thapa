import React, { useState } from "react";

const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  const handleIncrease = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <div className="flex flex-col items-center justify-center my-5">
      <h1>UseState Hooks</h1>
      <h1>{count}</h1>
      <button
        className="bg-blue-500 text-white p-3 rounded-lg"
        onClick={handleIncrease}
      >
        Increment
      </button>
    </div>
  );
};

export default UseStateComponent;
