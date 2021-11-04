import React from "react";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <NavLink classname="navigation" activeClassName="active" to="/login">
        Login
      </NavLink>
      <NavLink classname="navigation" activeClassName="active" to="/signup">
        Signup Page
      </NavLink>
    </nav>
  );
}
