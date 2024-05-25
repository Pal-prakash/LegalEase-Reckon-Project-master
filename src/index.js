import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Web3Provider from './context/web3context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3Provider>
      <App />
    </Web3Provider>
  </React.StrictMode>
);

