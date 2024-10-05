import React from "react";
import "./Navbar.css";

const Navbar = ({ title }) => {
  return (
    <div className="main-navbar">
      <div className="navbar">
        <h1>{title}</h1>
        <div className="iconsNavbar">
          <div
            onClick={() => {
              window.location.replace("/cart");
            }}
            className="cartIcon"
          >
            <i class="fa-solid fa-bag-shopping fa-2x"></i>
            <div className="smallTextIcon">
              <span>Cart</span>
              <span id="rex">View Items</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
