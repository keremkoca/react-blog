import React from "react";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavLink from "./NavLink";

function Navbar() {
  return (
    <Nav>
      <NavLogo to="/">MyBlog</NavLogo>
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/signin">Sign In</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </NavMenu>
    </Nav>
  );
}

export default Navbar;
