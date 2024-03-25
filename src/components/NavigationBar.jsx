/* eslint-disable react/prop-types */
// NavigationBar.jsx
import React from "react";
// import "./NavigationBar.css"; // Import the CSS for styling

const NavigationBar = ({ isOpen }) => {
  return (
    <div className={`navigation-bar ${isOpen ? "open" : ""}`}>
      <ul>
        <li>
          <a href="#">
            Home &nbsp;
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a href="#about">
            About &nbsp; <i className="fas fa-address-card"></i>
          </a>
        </li>
        <li>
          <a href="#projects">
            Projects &nbsp;<i className="fas fa-user-tie"></i>
          </a>
        </li>
        <li>
          <a href="#skills">
            Skills &nbsp; <i className="fas fa-code"></i>
          </a>
        </li>
        <li>
          <a href="#contact">
            Contact &nbsp;<i className="fas fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
