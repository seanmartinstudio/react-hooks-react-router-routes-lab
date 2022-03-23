import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
 
  <ul>
    <li>
    <NavLink
    to="/"
    exact
    >
      Home
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/movies"
    exact
    >
      Movies
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/directors"
    exact
    >
      Director
    </NavLink>
    </li>
    <li>
    <NavLink
    to="/actors"
    exact
    >
      Actors
    </NavLink>
    </li>
  </ul>

  )
}

export default NavBar;
