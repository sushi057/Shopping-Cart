import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <img src={Logo} alt="logo" />
          <h1>Sneaker Point</h1>
        </div>
        <div className="right-side"></div>
      </div>
    </>
  );
}

export default Navbar;
