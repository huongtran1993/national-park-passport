import React, { useState } from 'react';
import App from './App';
import Passport from './Passport';
import Search from './Search';

export const GlobalContext = React.createContext({
  value: '',
  setValue: () => {}
});

const GlobalContextProvider = (props) => {
  const [value, setValue] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
      }}
    >
      <App />
      <Passport />
      <Search />
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
