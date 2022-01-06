import React from "react";
import nav from "./Nav.module.css";
function Nav(props) {
  return <div className={nav.nav}>{props.children}</div>;
}

export default Nav;
