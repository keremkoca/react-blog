import React from "react";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavLink from "./NavLink";
import NavUser from "./NavUser";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Nav>
        <NavLogo to="/">MyBlog</NavLogo>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/write">Write</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavMenu>
        <NavUser />
      </Nav>
    </div>
  );
}

export default Navbar;
