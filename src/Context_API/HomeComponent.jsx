import { useContext } from 'react';
import { BioContext } from './BioContext';

const HomeComponent = () => {
  const { name, age, profession } = useContext(BioContext);

  return (
    <div>
      <h1>Home Component</h1>
      <p>Welcome to the Home Page!</p>
      <h2>Context API</h2>
      <p>My name is {name}</p>
      <p>My Age is {age} Years Old</p>
      <p>My Profession is {profession}</p>
    </div>
  );
};

export default HomeComponent;
