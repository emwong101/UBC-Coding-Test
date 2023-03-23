import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/alphabet">Alphabet</Link>
      <Link to="/category">Category</Link>
    </nav>
  );
}

export default Nav;
