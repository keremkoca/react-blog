import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
function Posts() {
  return (
    <>
      <div className={classes.posts_title_container}>
        <h1 className={classes.posts_title}>Recent Posts</h1>
      </div>
      <div className={classes.posts_container}>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </div>
    </>
  );
}

export default Posts;
