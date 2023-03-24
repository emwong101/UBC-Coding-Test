import React from "react";
import { Link } from "react-router-dom";
import MartiniIcon from "../../assets/martini.svg";
import "./Nav.scss";

function Nav({ setData, location, setSelection }) {
  return (
    <div className="header__container">
      <Link to="/" className="title">
        <img
          src={MartiniIcon}
          className="title__icon"
          alt="martini glass icon"
        />
        <h1 className="title__text">The Cocktail Bar</h1>{" "}
      </Link>
      <nav className="nav">
        <Link
          to="/alphabet"
          onClick={() => {
            setData("");
            setSelection("");
          }}
          className={
            location === "/alphabet" ? "active nav__link" : "nav__link"
          }
        >
          Alphabet
        </Link>

        <Link
          to="/category"
          onClick={() => {
            setData("");
            setSelection("");
          }}
          className={
            location === "/category" ? "active nav__link" : "nav__link"
          }
        >
          Category
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
