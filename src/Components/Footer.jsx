import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div id="footer">
        <div className="footer-flex">
          <a href="https://github.com/em-twines" className ='icon'></a>
          <a href="https://linkedin.com/in/em-twines/" className ='linkedin'></a>
        </div>
      </div>
      <div id = 'hide-footer'></div>
    </div>
  );
}
