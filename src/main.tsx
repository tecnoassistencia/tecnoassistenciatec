import React from 'react';
import ReactDOM from 'react-dom/client'; // Certifique-se de que você está usando React 18+
import App from './App';  // O componente App que você vai criar ou já tem
import './index.css';     // Caso você tenha algum arquivo CSS para estilizar o projeto

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement); // Criação do ponto de entrada
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
