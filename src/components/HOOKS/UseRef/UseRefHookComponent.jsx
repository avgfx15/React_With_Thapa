import React from 'react';
import { useRef } from 'react';

const UseRefHookComponent = () => {
  const name = useRef(null);
  const email = useRef(null);
  const mobile = useRef(null);
  const password = useRef(null);

  const inputRef = useRef({
    name: null,
    email: null,
    mobile: null,
    password: null,
  });
  // useRef is used to access DOM elements directly without re-rendering the component
  const handalSubmit = (e) => {
    e.preventDefault();
    console.log(name.current.value);
    console.log(email.current.value);
    console.log(mobile.current.value);
    console.log(password.current.value);
  };

  const handalSubmit2 = (e) => {
    e.preventDefault();
    console.log(inputRef.current.name.value);
    console.log(inputRef.current.email.value);
    console.log(inputRef.current.mobile.value);
    console.log(inputRef.current.password.value);
  };

  return (
    <div>
      <h1>UseRefHookComponent</h1>
      <div>
        <form onSubmit={handalSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' name='name' ref={name} />
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' name='email' ref={email} />
          </div>
          <div>
            <label htmlFor='mobile'>Mobile:</label>
            <input type='text' id='mobile' name='mobile' ref={mobile} />
          </div>
          <div>
            <label htmlFor='password'>Password:</label>
            <input
              type='password'
              id='password'
              name='password'
              ref={password}
            />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
        <h1>Second Form</h1>
        <form onSubmit={handalSubmit2}>
          <label>Name:</label>
          <input type='text' ref={(el) => (inputRef.current.name = el)} />

          <label>Email:</label>
          <input type='email' ref={(el) => (inputRef.current.email = el)} />

          <label>Mobile:</label>
          <input type='tel' ref={(el) => (inputRef.current.mobile = el)} />

          <label>Password:</label>
          <input
            type='password'
            ref={(el) => (inputRef.current.password = el)}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default UseRefHookComponent;
