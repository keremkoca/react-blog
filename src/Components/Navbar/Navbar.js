import React, { useContext } from "react";
import Nav from "./Nav";
import NavLogo from "./NavLogo";
import NavMenu from "./NavMenu";
import NavUser from "./NavUser";
import NavLink from "./NavLink";
import { Link } from "react-router-dom";
import { AuthContext } from "App";
import "./Navbar.css";

function Navbar() {
  const { state, dispatch } = useContext(AuthContext);
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
          {state.authenticatedUser.isAuthenticated && (
            <NavLink>
              <Link className="link" to="/write">
                Write
              </Link>
            </NavLink>
          )}
          {!state.authenticatedUser.isAuthenticated ? (
            <NavLink>
              <Link className="link" to="/register">
                Sign Up
              </Link>
            </NavLink>
          ) : (
            <NavLink>
              <Link
                onClick={() =>
                  dispatch({
                    type: "LOGOUT",
                  })
                }
                className="link"
                to="/"
              >
                Logout
              </Link>
            </NavLink>
          )}
        </NavMenu>
        <NavUser />
      </Nav>
    </div>
  );
}

export default Navbar;
