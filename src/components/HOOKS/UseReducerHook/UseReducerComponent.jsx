import { useReducer } from 'react';
import reducerFunction from './reducerFunction';

const UseReducerComponent = () => {
  const initialState = {
    count: 0,
  };
  const [countState, dispatch] = useReducer(reducerFunction, initialState);

  return (
    <div className='text-center mt-10 flex flex-col justify-center items-center h-screen'>
      <h1 className='text-3xl font-bold'>
        UseReducer Hook For Counter Application
      </h1>
      <div>
        <h2 className='text-2xl font-bold'>Counter</h2>
        <h3 className='text-xl font-semibold'>{countState.count}</h3>
        <button
          className='bg-blue-500 text-white px-4 py-2 m-2 rounded'
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Increment
        </button>
        <button
          className='bg-red-500 text-white px-4 py-2 m-2 rounded'
          onClick={() => dispatch({ type: 'DECREMENT' })}
        >
          Decrement
        </button>
        <button
          className='bg-green-500 text-white px-4 py-2 m-2 rounded'
          onClick={() => dispatch({ type: 'RESET' })}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerComponent;
