import { BioContext } from './BioContext';

export const BioProvider = ({ children }) => {
  const name = 'Swamibapa';
  const age = 25;
  const profession = 'Developer';

  return (
    <BioContext.Provider value={{ name, age, profession }}>
      {children}
    </BioContext.Provider>
  );
};
