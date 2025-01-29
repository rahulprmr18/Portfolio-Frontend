import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

export const backend = "https://portfolio-backend-vgi8.onrender.com";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
