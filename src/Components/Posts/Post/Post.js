import React from "react";
import classes from "./Post.module.css";
import { Link } from "react-router-dom";
function Post(props) {
  const { img, title, avatar, id, description } = props;
  return (
    <Link className="link" to={`/details/${id}`}>
      <div className={classes.container}>
        <div className={classes.postImg}>
          <img alt="userImg" src={img}></img>
        </div>
        <div className={classes.postInfo}>
          <h3 className={classes.post_title}>{title}</h3>
          <div className={classes.userInfo}>
            <div className={classes.post_details}>
              <img
                className={classes.user_img}
                alt="userImg"
                src={avatar}
              ></img>
              <div className={classes.postDate}>1 hour ago</div>
            </div>
            <div className={classes.postDescription}>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Post;
