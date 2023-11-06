import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Home from './Pages/HomePage/Home';
import Slider from './Components/Slider/Slider';
import Navbar from './Components/Navbar/Navbar';
import Aboutus from './Pages/Aboutus/Aboutus';
import Architecture from './Pages/Architecture/Architecture';
import Services from './Pages/Services/Services';
import Projects from './Pages/Projects/Projects';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/home' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} /> 
        <Route path='/architecture' element={<Architecture />} /> 
        <Route path='/services' element={<Services />} /> 
        <Route path='/projects' element={<Projects />} /> 
        <Route path='/contact' element={<Contact />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
