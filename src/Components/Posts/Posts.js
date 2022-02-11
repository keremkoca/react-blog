import React, { useContext } from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";
import Context from "utils/context";
function Posts() {
  const { statePostsReducer: state } = useContext(Context);

  const sortedPosts = state.posts.sort((a, b) => {
    a = new Date(a.createdAt);
    b = new Date(b.createdAt);
    return b - a;
  });

  return (
    <div className={classes.posts}>
      <div className={classes.posts_title_container}>
        <h1 className={classes.posts_title}>Recent Posts</h1>
      </div>

      <div className={classes.posts_container}>
        {sortedPosts.map((post) => {
          return state.users.map((user) => {
            if (user.id === post.userID) {
              return (
                <Post
                  id={post.id}
                  key={Math.random()}
                  userID={user.id}
                  title={post.title}
                  username={user.username}
                  createdAt={post.createdAt}
                  description={post.description}
                  img={post.img}
                  avatar={user.avatar}
                ></Post>
              );
            }
          });
        })}
      </div>
    </div>
  );
}

export default Posts;
