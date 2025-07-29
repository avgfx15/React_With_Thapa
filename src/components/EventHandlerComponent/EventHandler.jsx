import React from "react";

import eventStyle from "./Event.module.css";

const EventHandler = () => {
  const handleDisplayMovieDetails = () => {
    const movieDetails = {
      title: "Inception",
      director: "Christopher Nolan",
      year: 2010,
      genre: "Science Fiction",
    };
    console.log(movieDetails);
  };

  const handleDisplayNameWithArgument = (name) => {
    console.log(`Hello, ${name}!`);
  };

  const handleGetEvent = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.target.innerText);
    console.log(event.target.value);
  };

  return (
    <div className="flex items-center justify-center my-5">
      {/* Using Arrow FunctionEventHandler */}
      <div className="flex flex-col items-center justify-center">
        <h2>Using Arrow FunctionEventHandler</h2>
        <button
          className="bg-amber-700 text-3xl w-72 text-center rounded-lg cursor-pointer p-3"
          onClick={() => handleDisplayMovieDetails()}
        >
          EventHandler
        </button>
      </div>

      {/* Using Named FunctionEventHandler */}
      <div className="flex flex-col items-center justify-center ml-3">
        <h2>Using Named FunctionEventHandler</h2>
        <button
          className="bg-blue-700 text-3xl w-72 text-center rounded-lg cursor-pointer p-3"
          onClick={handleDisplayMovieDetails}
        >
          EventHandler
        </button>
      </div>

      {/* Get Argument FunctionEventHandler */}
      <div className="flex flex-col items-center justify-center ml-3">
        <h2>Get Argument FunctionEventHandler</h2>
        <button
          className="bg-slate-700 text-3xl w-72 text-center text-white rounded-lg cursor-pointer p-3"
          onClick={() => handleDisplayNameWithArgument("Swamibapa")}
        >
          EventHandler
        </button>
      </div>

      {/* Get Event FunctionEventHandler */}
      <div className="flex flex-col items-center justify-center ml-3">
        <h2>Get Event FunctionEventHandler</h2>
        <button
          className="bg-yellow-700 text-3xl w-72 text-center text-white rounded-lg cursor-pointer p-3"
          onClick={(e) => handleGetEvent(e)}
        >
          EventHandler
        </button>
      </div>
    </div>
  );
};

export default EventHandler;
