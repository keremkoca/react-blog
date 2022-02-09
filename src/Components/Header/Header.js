import React from "react";
import classes from "./Header.module.css";
import HeaderItem from "./HeaderItem";
import Context from "utils/context";
import { useContext } from "react";
function Header() {
  const { statePostsReducer: state } = useContext(Context);
  const newPosts = state.posts
    .filter((post) => {
      return !post.featured;
    })
    .map((post) => {
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
