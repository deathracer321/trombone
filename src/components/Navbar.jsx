import React from "react";
import "./Navbar.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="app-navbar">
      <span className="left-navbar">
        <img
          className="navbar-logo"
          alt="Logo"
          src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
        />
      </span>
      <span className="right-navbar">
        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link to="/Cart" className="navbar-hyperlink">
              Cart
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/products" className="navbar-hyperlink">
              Products
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/howitworks" className="navbar-hyperlink">
              How It Works
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/features" className="navbar-hyperlink">
              Features
            </Link>
          </li>
          <li className="navbar-li">
            <Link to="/home" className="navbar-hyperlink">
              Home
            </Link>
          </li>
        </ul>
      </span>
    </div>
  );
}

export default Navbar;
