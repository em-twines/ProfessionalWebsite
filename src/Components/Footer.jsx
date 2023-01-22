import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <div id="footer">
        <div className="footer-flex">
          <Link
            className="icon"
            to={{ pathname: "https://github.com/em-twines" }}
            target="_blank"
          ></Link>
        </div>
      </div>
      <div id = 'hide-footer'></div>
    </div>
  );
}
