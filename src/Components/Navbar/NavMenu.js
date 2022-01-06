import React from "react";
import Menu from "./NavMenu.module.css";

function NavMenu(props) {
  return <div className={Menu.NavMenu}>{props.children}</div>;
}

export default NavMenu;
