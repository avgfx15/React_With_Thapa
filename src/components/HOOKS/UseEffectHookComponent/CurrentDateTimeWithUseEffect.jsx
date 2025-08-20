import React, { useState, useEffect } from 'react';

const CurrentDateTimeWithUseEffect = () => {
  const [date, setDate] = useState();
  const [count, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      const updatedDate = new Date();
      setDate(updatedDate.toLocaleTimeString());
    }, 1000);
  }, [date]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className='flex flex-col justify-center items-center h-screen bg-blue-200'>
      <h1 className='text-4xl font-bold text-center mt-5 text-blue-500'>
        Current Date & Time With UseEffect
      </h1>
      <h2 className='text-4xl font-bold text-center mt-5 text-amber-800'>
        {date}
      </h2>

      <h3 className='text-4xl font-bold text-center mt-5 text-amber-800'>
        {count}
      </h3>
      <button
        className='text-4xl font-bold text-center mt-5 text-amber-200 bg-gray-600 py-2 px-5 rounded-md shadow-2xl'
        onClick={() => setCount(count + 1)}
      >
        Increment Count
      </button>
    </div>
  );
};

export default CurrentDateTimeWithUseEffect;
