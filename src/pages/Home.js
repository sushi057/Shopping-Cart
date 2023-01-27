import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import Shoes from "../assets/home_shoes.jpg";

function Home() {
  return (
    <>
      <div className="main">
        <div className="shoe-display">
          <img src={Shoes} alt="travis scott shoes" />
          <Link to="/men">
            <button type="button" className="shop-btn">
              SHOP NOW
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
