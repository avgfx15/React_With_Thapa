import React from "react";
import ChildComponent from "./ChildComponent";

const EventAsProps = () => {
  const handleParentFunction = () => {
    console.log("Parent Button Clicked");
  };

  const handleChildFunction = () => {
    console.log("Child Button Clicked");
  };

  const handleChildFunctionHover = () => {
    console.log("Child Button Hovered");
  };

  return (
    <div className="flex items-center justify-center my-5">
      <h1 className="text-4xl font-bold text-center mr-5 text-blue-500">
        EventAsProps : -{" "}
      </h1>
      <button
        className="bg-amber-700 text-3xl w-72 text-center rounded-lg cursor-pointer p-3 mr-3"
        onClick={handleParentFunction}
      >
        Parent Button
      </button>
      <ChildComponent
        handleChildFunction={handleChildFunction}
        handleChildFunctionHover={handleChildFunctionHover}
      />
    </div>
  );
};

export default EventAsProps;
