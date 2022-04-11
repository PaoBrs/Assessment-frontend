import React from "react"
import { NavLink } from "react-router-dom"
import { HOME_ROUTER, ABOUT } from "../../Constants/Routes"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <NavLink to={HOME_ROUTER}>Home</NavLink>
      <NavLink to={ABOUT}>About</NavLink>
    </nav>
  )
}

export default Navbar
