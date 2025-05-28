import React from 'react';
import ReactDOM from 'react-dom/client';  // aqui mudou
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // cria o root

root.render(<App />); // renderiza o app
