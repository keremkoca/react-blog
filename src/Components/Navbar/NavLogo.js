import React from "react";
import classes from "./NavLogo.module.css";
function NavLogo(props) {
  return <div className={classes.NavLogo}>{props.children}</div>;
}

export default NavLogo;
