import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.css';
import './css/bootstrap.min.css';
import './css/colour-slate.css';
import './css/theme-style.min.css';
import App from './App';
import Documentos from './Documentos';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>

);

const tramites = ReactDOM.createRoot(document.getElementById('tramites'));
tramites.render(
  <React.StrictMode>
    <Documentos />
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
