import React from 'react'
import { Link } from 'react-router-dom';


export default function NavBar() {
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b className='nav'>Home</b>
          </Link>
        </li>

      </ul>
    </div>
  );
}
