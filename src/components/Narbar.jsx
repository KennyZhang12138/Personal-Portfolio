import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav fixed-top row justify-content-around">
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "")}
          to="/"
        >
          Home
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "")}
          to="/About"
        >
          About
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "")}
          to="/Project"
        >
          Project
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "")}
          to="/Contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) => (isActive ? "nav-link active" : "")}
          to="/Resume"
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
