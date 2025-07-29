import React from "react";

const ChildComponent = (props) => {
  console.log(props);
  return (
    <div>
      {/* <h1>ChildComponent</h1> */}

      <button
        className="bg-blue-700 text-3xl w-72 text-center rounded-lg cursor-pointer p-3 mr-3"
        onClick={props.handleChildFunction}
      >
        Child Button 1
      </button>
      <button
        className="bg-pink-700 text-3xl w-72 text-center rounded-lg text-white cursor-pointer p-3"
        onMouseEnter={props.handleChildFunctionHover}
      >
        Child Button Hover
      </button>
    </div>
  );
};

export default ChildComponent;
