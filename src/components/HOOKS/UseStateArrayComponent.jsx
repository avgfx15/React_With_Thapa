import React, { useState } from "react";

const UseStateArrayComponent = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Bob", age: 22 },
  ]);

  // Derived State - If you need to update the state based on the previous state, you can use a function inside setUsers.

  // + Derived State
  const totalUsers = users.length;

  const averageAge =
    users.reduce((acc, user) => acc + user.age, 0) / totalUsers;

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl font-bold text-gray800">UseStateArrayComponent</h1>
      {users.map((user) => (
        <div key={user.id} className="flex gap-5">
          <h2>Name : - {user.name}, </h2>

          <p>Age : - {user.age}</p>
        </div>
      ))}
      <h2 className="mt-4">Total Users: {totalUsers}</h2>
      <h2>Average Age: {averageAge.toFixed(0)}</h2>
    </div>
  );
};

export default UseStateArrayComponent;
