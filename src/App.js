import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './pages/UserSide/Home'

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
