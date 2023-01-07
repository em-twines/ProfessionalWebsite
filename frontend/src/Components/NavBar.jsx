import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className="navBar">
      <ul className = 'navFlex'>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b className='nav'>HOME</b>
          </Link>
        </li>
        <div className = 'nav-flex-jr'>
          <li className="projects-nav-link">
            <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
              <b className='nav'>PROJECTS</b>
            </Link>
          </li>
          <li className="about">
            <Link to="/about" style={{ textDecoration: "none", color: "white" }}>
              <b className='about'>ABOUT</b>
            </Link>
          </li>
          <li className="contact-nav-link">
            <Link to="/contact" style={{ textDecoration: "none", color: "white" }}>
              <b className='nav'>CONTACT</b>
            </Link>
          </li>
        </div>
      </ul>
    </div>
  );
}
