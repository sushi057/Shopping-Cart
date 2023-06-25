import React from "react";
import "../styles/Navbar.css";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="left-side">
          <Link to="/" className="logo-title">
            <img src={Logo} alt="logo" className="main-logo" />
            <div className="title">
              <h2>SNEAKER</h2>
              <h1>POINT</h1>
            </div>
          </Link>
        </div>
        <div className="right-side">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/kids">Kids</Link>
          <Link to="/user">User</Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
