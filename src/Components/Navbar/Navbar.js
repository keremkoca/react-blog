import React from "react";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <Nav>
        <NavLogo>
          <Link className="link" to="/">
            MyBlog
          </Link>
        </NavLogo>
        <NavMenu>
          <NavLink>
            <Link className="link" to="/">
              Home
            </Link>
          </NavLink>
          <NavLink>
            <Link className="link" to="/about">
              About
            </Link>
          </NavLink>
          <NavLink>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </NavLink>
          <NavLink>
            <Link className="link" to="/write">
              Write
            </Link>
          </NavLink>
          <NavLink>
            <Link className="link" to="/register">
              Sign Up
            </Link>
          </NavLink>
        </NavMenu>
        <NavUser />
      </Nav>
    </div>
  );
}

export default Navbar;
