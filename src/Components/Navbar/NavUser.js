import React from "react";
import classes from "./NavUser.module.css";
import logo from "/Users/emir/Desktop/blog-app/src/Assets/Logo.jpeg";
import { Link } from "react-router-dom";
function NavUser() {
  return (
    <div className={classes.container}>
      <Link to="/settings">
        <img className={classes.userImg} alt="userImg" src={logo}></img>
      </Link>
      <i className={`${classes.searchIcon} fas fa-search`}></i>
    </div>
  );
}

export default NavUser;
