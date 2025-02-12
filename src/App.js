import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap
import 'owl.carousel/dist/assets/owl.carousel.min.css'; // Owl Carousel
import 'owl.carousel/dist/assets/owl.theme.default.min.css'; // Owl Carousel Theme
import 'animate.css/animate.min.css'; // Animate.css
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome
import 'select2/dist/css/select2.min.css'; // Select2
import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css';
import 'vegas/dist/vegas.min.css'; // Vegas Slider

import Error from './components/Error'
import Home from './pages/UserSide/Home'
import AboutUs from './pages/UserSide/AboutUs';
import Contact from './pages/UserSide/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element ={<Error/>} />

      </Routes>
    </div>
  );
}

export default App;
