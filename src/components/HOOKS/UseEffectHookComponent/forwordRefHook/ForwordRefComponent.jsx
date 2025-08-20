import React from 'react';
import ForwordInputComponent from './ForwordInputComponent';
import { useRef } from 'react';

const ForwordRefComponent = () => {
  const username = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(email.current.value);
    console.log(mobile.current.value);
    console.log(password.current.value);
  };

  return (
    <div>
      <h1>ForwordRefComponent</h1>
      <form onSubmit={handleSubmit}>
        <ForwordInputComponent type='text' label='Name' ref={username} />
        <ForwordInputComponent type='email' label='Email' ref={email} />
        <ForwordInputComponent type='tel' label='Mobile' ref={mobile} />
        <ForwordInputComponent
          type='password'
          label='Password'
          ref={password}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ForwordRefComponent;
