import React from "react";
import classes from "./Header.module.css";
import HeaderItem from "./HeaderItem";
import { AuthContext } from "App";
import { useContext } from "react";
function Header() {
  const { state } = useContext(AuthContext);
  const newPosts = state.headerPosts.map((post) => {
    return (
      <HeaderItem
        className={
          post.id === "d3" ? classes.header_news : classes.header_news_side
        }
        id={post.id}
        img={post.img}
        title={post.title}
      ></HeaderItem>
    );
  });
  return (
    <div className={classes.container}>
      <div className={classes.header_container_left}>
        {newPosts[0]}
        {newPosts[1]}
      </div>
      <div className={classes.header_container_mid}>{newPosts[2]}</div>
      <div className={classes.header_container_right}>
        {newPosts[3]}
        {newPosts[4]}
      </div>
    </div>
  );
}

export default Header;
