import React from "react";
import classes from "./Header.module.css";
import HeaderItem from "./HeaderItem";
import newsImg from "/Users/emir/Desktop/blog-app/src/Assets/news_img.jpeg";
function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.header_container_left}>
        <HeaderItem className={classes.header_news_side}></HeaderItem>
        <HeaderItem className={classes.header_news_side}></HeaderItem>
      </div>
      <div className={classes.header_container_mid}>
        <HeaderItem className={classes.header_news}></HeaderItem>
      </div>
      <div className={classes.header_container_right}>
        <HeaderItem className={classes.header_news_side}></HeaderItem>
        <HeaderItem className={classes.header_news_side}></HeaderItem>
      </div>
    </div>
  );
}

export default Header;
