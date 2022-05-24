import React, { useContext } from "react";
import SinglePost from "./SinglePost";
import Context from "utils/context";
import { useParams } from "react-router-dom";

function PostDetail() {
  let { id } = useParams();
  const { statePostsReducer: state } = useContext(Context);
  const post = state.posts.find((post) => {
    return !post.featured
      ? post.id.toString() === id.toString()
      : post.id.toString() === id.toString();
  });
  const user = state.users.find((user) => {
    return user.id === post.userID;
  });
  return (
    <div>
      <SinglePost
        id={post.id}
        username={post.featured && user.username}
        userID={post.featured && user.id}
        name={post.name}
        postImg={post.img}
        title={post.title}
        avatar={post.featured && user.avatar}
        createdAt={post.createdAt}
        description={post.description}
      ></SinglePost>
    </div>
  );
}

export default PostDetail;
