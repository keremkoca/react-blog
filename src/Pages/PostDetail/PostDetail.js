import React, { useContext } from "react";
import SinglePost from "./SinglePost";
import { HeaderContext } from "App";
import { useParams } from "react-router-dom";

function PostDetail() {
  let { id } = useParams();
  const posts = useContext(HeaderContext);
  const selectedPost = posts.find((post) => id == post.id);

  console.log(id, posts, selectedPost);
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
