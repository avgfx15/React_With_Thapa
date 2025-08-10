import React from "react";
import { useState } from "react";

const RegistrationFormComponent = () => {
  // @ State Variable
  const [inputFormData, setInputFormData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  // @ handle Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputFormData({
      ...inputFormData,
      [name]: value,
    });
  };

  // @ Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFormData);
  };

  // @ Render Component
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-300">
      <h1 className="text-4xl font-bold text-center mt-5 text-blue-500">
        RegistrationFormComponent
      </h1>
      <form
        className="flex flex-col items-center justify-center gap-4 w-3/5"
        onSubmit={handleSubmit}
      >
        <div className="my-4 w-full">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="email"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please Enter Your Name"
            value={inputFormData.name}
            onChange={handleChange}
            className="border-2 border-black-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="username"
          >
            User Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please Enter Your User Name"
            value={inputFormData.username}
            onChange={handleChange}
            className="border-2 border-black-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please Enter Your Email 1a@gmail.com"
            value={inputFormData.email}
            onChange={handleChange}
            className="border-2 border-black-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Please Enter Your Mobile 1234567890"
            value={inputFormData.mobile}
            onChange={handleChange}
            className="border-2 border-black-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <label
            className="block text-gray-700 text-lg font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please Enter Your Password"
            value={inputFormData.password}
            onChange={handleChange}
            className="border-2 border-black-300 rounded-lg p-2 w-full"
          />
        </div>
        <div className="mb-4 w-full">
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg text-xl"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationFormComponent;
