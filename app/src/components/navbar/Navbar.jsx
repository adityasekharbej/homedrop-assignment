import React from "react";
import "./navbar.css";
import logo from "../images/logo.jpg";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-nav">
        <div className="group-div">
          <div>
            <i class="fa-solid fa-bars"></i>
          </div>
          <div>
            <img src={logo} alt="" className="logo-img" />
          </div>
          <div>
            <p className="head-name">Swastik Marketing</p>
          </div>
        </div>
        <div className="search-div">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right-nav">
        <div className="chip">
            Connected
        </div>
        <div>
          <i class="fa-regular fa-circle-question"></i>
        </div>
        <div>
          <i class="fa-regular fa-bell"></i>
        </div>
        <div className="avatar">kg</div>
        <div>
          <i class="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};
