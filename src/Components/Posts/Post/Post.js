import React from "react";
import classes from "./Post.module.css";
import postImg from "../../../Assets/news_img.jpeg";
import logo from "../../../Assets/Logo.jpeg";
function Post() {
  return (
    <div className={classes.post_container}>
      <div className={classes.post_img}>
        <img alt="userImg" src={postImg}></img>
      </div>
      <div className={classes.post_info}>
        <h3 className={classes.post_title}>This is a Post about something</h3>
        <div className={classes.post_user_info}>
          <div className={classes.post_details}>
            <img
              className={classes.post_user_img}
              alt="userImg"
              src={logo}
            ></img>
            <div className={classes.post_date}>1 hour ago</div>
          </div>
          <div className={classes.post_description}>
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
