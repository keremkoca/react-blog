import React from "react";
import classes from "./HeaderItem.module.css";
import headerImg from "../../Assets/news_img.jpeg";
function HeaderItem(props) {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <img
        className={classes.headerItem_img}
        alt="no img"
        src={headerImg}
      ></img>
      <div className={classes.headerItem_info}>
        <span className={classes.headerItem_title}>
          Lorem ipsum dolor sit amet
        </span>
        <span className={classes.headerItem_date}>1 hour ago</span>
      </div>
    </div>
  );
}

export default HeaderItem;
