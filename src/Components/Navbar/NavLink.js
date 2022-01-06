import React from "react";
import Link from "./NavLink.module.css";

function NavLink(props) {
  return <div className={Link.NavLink}>{props.children}</div>;
}

export default NavLink;
