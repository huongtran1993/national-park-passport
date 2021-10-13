import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalContextProvider from './components/GlobalContext';

ReactDOM.render(
  <GlobalContextProvider>
    <App />
  </GlobalContextProvider>,
  document.getElementById('app')
);
