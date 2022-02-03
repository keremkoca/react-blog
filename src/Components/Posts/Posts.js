import React, { useContext } from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import { AuthContext } from "App";
function Posts() {
  const { state } = useContext(AuthContext);
  return (
    <>
      <div className={classes.posts_title_container}>
        <h1 className={classes.posts_title}>Recent Posts</h1>
      </div>
      <div className={classes.posts_container}>
        {state.users.map((user) => {
          let userPosts = [...user.posts];

          return userPosts.map((post) => {
            console.log(user, user.id);
            return (
              <Post
                id={post.id}
                key={Math.random()}
                userID={user.id}
                title={post.title}
                description={post.description}
                img={post.img}
                avatar={user.avatar}
              ></Post>
            );
          });
        })}
      </div>
    </>
  );
}

export default Posts;
