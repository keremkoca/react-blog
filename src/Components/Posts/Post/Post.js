import React from "react";
import classes from "./Post.module.css";
import postImg from "../../../Assets/news_img.jpeg";
import logo from "../../../Assets/Logo.jpeg";
function Post() {
  return (
    <div className={classes.container}>
      <div className={classes.postImg}>
        <img alt="userImg" src={postImg}></img>
      </div>
      <div className={classes.postInfo}>
        <h3 className={classes.post_title}>This is a Post about something</h3>
        <div className={classes.userInfo}>
          <div className={classes.post_details}>
            <img
              className={classes.user_img}
              alt="userImg"
              src={logo}
            ></img>
            <div className={classes.postDate}>1 hour ago</div>
          </div>
          <div className={classes.postDescription}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ipsum tortor, sollicitudin non felis convallis, placerat sagittis
              risus. Aliquam erat volutpat. Proin suscipit pretium accumsan.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ipsum tortor, sollicitudin non felis convallis, placerat sagittis
              risus. Aliquam erat volutpat. Proin suscipit pretium accumsan.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              ipsum tortor, sollicitudin non felis convallis, placerat sagittis
              risus. Aliquam erat volutpat. Proin suscipit pretium accumsan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
