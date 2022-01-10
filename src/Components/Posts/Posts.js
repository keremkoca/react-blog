import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
function Posts() {
  return (
    <div className={classes.posts_container}>
      <div className={classes.posts_row}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div className={classes.posts_row}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
      <div className={classes.posts_row}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </div>
  );
}

export default Posts;
