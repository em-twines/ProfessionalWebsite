//import general items
import { Routes, Route, Navigate } from "react-router-dom";
// import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

//import pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';


//import components
import NavBar from './Components/NavBar';
// import NavBurger from './Components/NavBurger';







function App() {



  return (
     
    <div className="App">

    <NavBar/> 

          <Routes>
          
          <Route path="/" element={<Home/>} />

          <Route path="/projects" element={<Projects/>} />

          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />
          
          </Routes>
            
      {/* <Footer /> */}

    </div>


  );
}

export default App;
