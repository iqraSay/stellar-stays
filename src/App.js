import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Error from './components/Error'


import Home from './pages/UserSide/Home'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element ={<Error/>} />

      </Routes>
    </div>
  );
}

export default App;
