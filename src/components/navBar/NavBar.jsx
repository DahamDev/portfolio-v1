import "./navBar.css"
import { Link } from "react-router-dom";
import React from 'react'

function NavBar() {
  return (
    <div className="navBar">
      <ul className="menuItems">
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/aboutme"}>About me</Link></li>
      </ul>
    </div>
  )
}

export default NavBar;