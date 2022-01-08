import React from "react";
import classes from "./NavUser.module.css";
import logo from "/Users/emir/Desktop/blog-app/src/Assets/Logo.jpeg";
function NavUser() {
  return (
    <div className={classes.container}>
      <img className={classes.userImg} alt="sik" src={logo}></img>
      <i className={`${classes.searchIcon} fas fa-search`}></i>
    </div>
  );
}

export default NavUser;
