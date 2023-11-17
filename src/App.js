import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';
import ContactUs from './components/ContactUs';
import Register from './components/Register';
import {ForgotPw} from './components/ForgotPw';
import Home2 from './components/Home2';
import AboutUs from './components/AboutUs'
import { AdoptPet } from './components/AdoptPet';
import { Vaccinate } from './components/Vaccinate';
import { VaccinationData } from './components/VaccinationData';


function App() {
  return (
    <div className='container'>
      <HashRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-pw" element={<ForgotPw/>} />
          <Route path="/home2" element={<Home2/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/adopt-pet" element={<AdoptPet/>} />
          <Route path="/vaccinate" element={<Vaccinate/>} />
          <Route path="/vaccine-data" element={<VaccinationData/>} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
