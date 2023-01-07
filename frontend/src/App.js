//import general items
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//import pages
import Home from './pages/Home';
import Project1 from './pages/Project1';
import Project2 from './pages/Project2';
import Project3 from './pages/Project3';
import About from './pages/About';
import Contact from './pages/Contact';


//import components
import NavBar from './Components/NavBar';



function App() {
  return (


    <div className="App">

      <NavBar/>

          <Routes>
          
          <Route path="/" element={<Home/>} />

          <Route path="/project1" element={<Project1/>} />

          <Route path="/project2" element={<Project2/>} />

          <Route path="/project3" element={<Project3 />} />

          <Route path="/about" element={<About/>} />

          <Route path="/contact" element={<Contact/>} />
          
          </Routes>
            
      {/* <Footer /> */}

    </div>


  );
}

export default App;
