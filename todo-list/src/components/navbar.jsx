import React from "react";

const NavBar = props => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <span className="navbar-brand mb-0 h1">{props.title}</span>
    </nav>
  );
};

export default NavBar;
