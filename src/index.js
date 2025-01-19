import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Global CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'; 
import 'animate.css/animate.min.css'; 
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'select2/dist/css/select2.min.css'; 
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'vegas/dist/vegas.min.css'; 

// Global JS Imports
import './Js/custom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

reportWebVitals();
