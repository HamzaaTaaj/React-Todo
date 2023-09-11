import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <div class="header">
        <NavLink className="Navigat">IndexAdverts</NavLink>
        <div class="header-right">
          <NavLink className="Navigat" to="todo">
            Home
          </NavLink>
          <NavLink className="Navigat" to="contact">
            About
          </NavLink>
          <NavLink className="Navigat">Contact</NavLink>
          <NavLink className="Navigat">Empty</NavLink>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
