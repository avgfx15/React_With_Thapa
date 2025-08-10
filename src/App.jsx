import React from "react";
import DetailsCard from "./components/DetailsCard";

import EventHandler from "./components/EventHandlerComponent/EventHandler";
import "./App.css";
import EventAsProps from "./components/EventAsPropsComponent/EventAsProps";
import UseStateComponent from "./components/HOOKS/UseStateComponent";
import UseStateArrayComponent from "./components/HOOKS/UseStateArrayComponent";
import LiftingState from "./components/HOOKS/LiftingStateComponent/LiftingState";
import CountChallange from "./components/HOOKS/UseStateHookComponent/CountChallange";
import RegistrationFormComponent from "./components/HOOKS/UseStateHookComponent/RegistrationFormComponent";
import LoginFormComponent from "./components/HOOKS/UseStateHookComponent/LoginFormComponent";

const App = () => {
  return (
    <>
      <LoginFormComponent />
      {/* <RegistrationFormComponent /> */}
      {/* <CountChallange /> */}
      {/* <h1 className="text-4xl font-bold underline text-center mt-5 text-blue-500">
        Hello world!
      </h1> */}
      {/* <LiftingState /> */}
      {/* <UseStateArrayComponent />
      <UseStateComponent />
      <EventHandler />
      <EventAsProps />
      <DetailsCard /> */}
    </>
  );
};

export default App;
