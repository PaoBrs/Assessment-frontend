import React from "react"
import { NavLink } from "react-router-dom"
import { HOME_ROUTER, ABOUT } from "../../Constants/Routes"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <NavLink className='nav_text' to={HOME_ROUTER}>Home</NavLink>
      <NavLink className='nav_text' to={ABOUT}>About</NavLink>
    </nav>
  )
}

export default Navbar
