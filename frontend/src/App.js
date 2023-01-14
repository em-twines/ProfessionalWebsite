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

//state variables to manage navigation based on viewport size. 
//knows when to display the mobile nav links
// const[mobileNavOpen, setMobileNavOpen] = useState(false);
// //knows when to display the hamburger button
// const[openMobileNavMenu, setOpenMobileNavMenu] = useState(false);


  // useEffect(() => {

  //   if (window.innerWidth > 700){
  //     setOpenMobileNavMenu(false); 
  //   }
  //   else if (window.innerWidth <= 700){
  //     setOpenMobileNavMenu(true);
  //   }
  // },[]);

  // useEffect(() => {

  //   const handleResize = () => {
  //       if (window.innerWidth > 700){
  //       setOpenMobileNavMenu(false); 
  //       setMobileNavOpen(false);
  //     }
  //     else if (window.innerWidth <= 700){
  //       setOpenMobileNavMenu(true);
  //     }
  //   }
  //   window.addEventListener('resize', handleResize);
  //   return() => {
  //     window.removeEventListener('resize', handleResize);
  //   }
  // },[]);

  return (
     
    <div className="App">

    <NavBar/> 

    {//this div gets display none. add display: contents
    }
        {/* {!openMobileNavMenu?(  
          <NavBar/>
          ):(
          <NavBurger/>)
        } */}
   
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
