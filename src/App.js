import React from 'react';
import './App.css';
import Routes from './Routes'
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Routes />
    </GlobalProvider>
  );
}


export default App;
