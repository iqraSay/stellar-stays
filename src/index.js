import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your custom global styles (if any)
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

// Global CSS Imports
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'owl.carousel/dist/assets/owl.carousel.min.css'; // Owl Carousel
import 'owl.carousel/dist/assets/owl.theme.default.min.css'; // Owl Carousel Theme
import 'animate.css/animate.min.css'; // Animate.css
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import 'select2/dist/css/select2.min.css'; // Select2
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'vegas/dist/vegas.min.css'; // Vegas Slider

// Global JS Imports
import './custom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
