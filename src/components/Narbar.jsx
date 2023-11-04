import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link active text-blue-500 dark:text-blue-300"
              : "nav-link"
          }
          to="/"
        > 
          Home
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link active text-blue-500 dark:text-blue-300"
              : "nav-link"
          }
          to="/About"
        >
          About
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link active text-blue-500 dark:text-blue-300"
              : "nav-link"
          }
          to="/Project"
        >
          Project
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link active text-blue-500 dark:text-blue-300"
              : "nav-link"
          }
          to="/Contact"
        >
          Contact
        </NavLink>
      </div>
      <div className="nav-item col">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "nav-link active text-blue-500 dark:text-blue-300"
              : "nav-link"
          }
          to="/Resume"
        >
          Resume
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
