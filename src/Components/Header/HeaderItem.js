import React from "react";
import classes from "./HeaderItem.module.css";
import { Link } from "react-router-dom";
function HeaderItem(props) {
  const { id, title, img } = props;
  return (
    <Link className="link" to={`/details/${id}`}>
      <div className={`${classes.container} ${props.className}`}>
        <img className={classes.headerItem_img} alt="no img" src={img}></img>
        <div className={classes.headerItem_info}>
          <span className={classes.headerItem_title}>{title}</span>
        </div>
      </div>
    </Link>
  );
}

export default HeaderItem;
