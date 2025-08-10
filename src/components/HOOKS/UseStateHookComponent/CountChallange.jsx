import React from "react";
import { useState } from "react";

const CountChallange = () => {
  const [count, setCount] = useState(0);

  const [difference, setDifference] = useState(0);

  const handleIncrease = () => {
    setCount(count + difference);
  };

  const handleDecrement = () => {
    setCount(count - difference);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center mt-5 text-blue-500">
        Count Challange
      </h1>
      <div className="flex flex-col items-center justify-center my-5">
        <h2 className="text-3xl font-bold text-center my-5 text-blue-500">
          {count}
        </h2>
        <div className="flex items-center gap-5 my-5">
          <label className="text-xl font-bold text-center my-5 text-black-500">
            Difference Value : -
          </label>
          <input
            type="number"
            value={difference}
            className="border-2 px-3 py-1 rounded-lg text-xl"
            onChange={(e) => setDifference(Number(e.target.value))}
          />
        </div>
        <div className="flex gap-5 my-5">
          <button
            className="bg-blue-500 text-white p-3 rounded-lg text-xl disabled:bg-gray-600 disabled:cursor-not-allowed"
            onClick={handleIncrease}
            disabled={count >= 100}
          >
            Increment
          </button>
          <button
            className="bg-amber-500 text-white p-3 rounded-lg text-xl  disabled:bg-gray-600 disabled:cursor-not-allowed"
            onClick={handleDecrement}
            disabled={count <= 0}
          >
            Decrement
          </button>
          <button
            className="bg-green-500 text-white p-3 rounded-lg text-xl  disabled:bg-gray-600 disabled:cursor-not-allowed"
            onClick={handleReset}
            disabled={count === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountChallange;
