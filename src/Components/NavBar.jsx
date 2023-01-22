import React, { useState } from "react";

import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Button, ButtonToolbar } from "react-bootstrap";

export default function NavBar() {
  const [showAnimated2, setShowAnimated2] = useState(false);

  return (
    <>
      <ul id="navFlex">
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b className="nav">HOME</b>
          </Link>
        </li>
        <div className="nav-flex-jr">
          <li className="projects-nav-link">
            <Link
              to="/projects"
              style={{ textDecoration: "none", color: "white" }}
            >
              <b className="nav">PROJECTS</b>
            </Link>
          </li>
          <li className="about">
            <Link
              to="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              <b className="about">ABOUT</b>
            </Link>
          </li>
          {/* <li className="contact-nav-link">
            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
              <b className='nav'>CONTACT</b>
            </Link>
          </li> */}
        </div>
      </ul>

      <div id="nav-burger">
        <section className="mb-3 ">
          <MDBNavbar   dark bgColor="dark">
            <MDBContainer fluid>
              <Link
                to="/"
                className="home"
                style={{ textDecoration: "none", color: "white" }}
                onClick={() => setShowAnimated2(false)}
              >
                HOME
              </Link>
              <MDBNavbarToggler
                type="button"
                className="second-button"
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowAnimated2(!showAnimated2)}
              >
                <div className={`animated-icon2 ${showAnimated2 && "open"}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </MDBNavbarToggler>
            </MDBContainer>
          </MDBNavbar>

          <MDBCollapse show={showAnimated2} style={{ position: "absolute", right: '0px'}}className="align-right">
            <div className="shadow-3 p-4">
              <Link
                to="/projects"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className=" border-bottom m-1 nav-bar-link" onClick={() => setShowAnimated2(!showAnimated2)}>
                  PROJECTS{" "}
                </Button>
              </Link>

              <Link
                to="/about"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button className="border-bottom m-1 nav-bar-link" onClick={() => setShowAnimated2(!showAnimated2)}>
                  ABOUT{" "}
                </Button>
              </Link>

              {/* <MDBBtn block className='border-bottom m-0' color='link'>
                CONTACT
              </MDBBtn> */}
            </div>
          </MDBCollapse>
        </section>
      </div>
    </>
  );
}

// import React from 'react'
// import { Link } from 'react-router-dom';

// export default function NavBar() {
//   return (
//       <ul className = 'navFlex'>
//         <li className="brand">
//           <Link to="/" style={{ textDecoration: "none", color: "white" }}>
//             <b className='nav'>HOME</b>
//           </Link>
//         </li>
//         <div className = 'nav-flex-jr'>
//           <li className="projects-nav-link">
//             <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
//               <b className='nav'>PROJECTS</b>
//             </Link>
//           </li>
//           <li className="about">
//             <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
//               <b className='about'>ABOUT</b>
//             </Link>
//           </li>
//           <li className="contact-nav-link">
//             <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
//               <b className='nav'>CONTACT</b>
//             </Link>
//           </li>
//         </div>
//       </ul>
//   );
// }
