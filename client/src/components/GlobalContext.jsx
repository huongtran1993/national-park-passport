import React, { useState } from 'react';
import App from './App';

export const GlobalContext = React.createContext({
  value: '',
  setValue: () => {},
  state: '',
  setSelectedState: () => {}
});

const GlobalContextProvider = (props) => {
  const [value, setValue] = useState('');
  const [state, setSelectedState] = useState('');

  return (
    <GlobalContext.Provider
      value={{
        value,
        setValue,
        state,
        setSelectedState,
      }}
    >
      <App />
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
