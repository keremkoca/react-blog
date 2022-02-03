import React, { useContext } from "react";
import SinglePost from "./SinglePost";
import { AuthContext } from "App";
import { useParams } from "react-router-dom";

function PostDetail() {
  let { id } = useParams();
  const { state } = useContext(AuthContext);
  const selectedPost = state.headerPosts.find(
    (post) => id.toString() === post.id.toString()
  );

  console.log(id, selectedPost, state.headerPosts, state);
  return (
    <div>
      <SinglePost
        id={selectedPost.id}
        postImg={selectedPost.img}
        title={selectedPost.title}
        description={selectedPost.description}
      ></SinglePost>
    </div>
  );
}

export default PostDetail;
