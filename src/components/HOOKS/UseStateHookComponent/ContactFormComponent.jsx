import React from "react";
import { useState } from "react";

const ContactFormComponent = () => {
  // @ State Variable
  const [inputFormData, setInputFormData] = useState({
    username: "",
    email: "",
    message: "",
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
    <div className="flex flex-col justify-center items-center h-screen bg-blue-300">
      <h1 className="text-4xl font-bold text-center mt-5 text-blue-500 mb-5">
        Contact Us
      </h1>
      <form
        className="flex flex-col items-center justify-center gap-4 w-3/5 bg-gray-300 p-5 rounded-lg shadow-2xl"
        onSubmit={handleSubmit}
      >
        <div className="my-4 w-full">
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
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            rows={10}
            cols={50}
            type="text"
            name="message"
            id="message"
            placeholder="Please Enter Your Message"
            value={inputFormData.message}
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

export default ContactFormComponent;
