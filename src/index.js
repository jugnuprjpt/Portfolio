import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Header />
  <React.StrictMode>
    <App />
  </React.StrictMode>
  <Footer /> 
  </BrowserRouter>
);

reportWebVitals();
