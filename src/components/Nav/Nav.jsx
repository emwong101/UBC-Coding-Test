import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

function Nav({ setData, location, setSelection }) {
  return (
    <nav className="nav">
      <Link
        to="/alphabet"
        onClick={() => {
          setData("");
          setSelection("");
        }}
        className={location === "/alphabet" ? "active nav__link" : "nav__link"}
      >
        Alphabet
      </Link>

      <Link
        to="/category"
        onClick={() => {
          setData("");
          setSelection("");
        }}
        className={location === "/category" ? "active nav__link" : "nav__link"}
      >
        Category
      </Link>
    </nav>
  );
}

export default Nav;
