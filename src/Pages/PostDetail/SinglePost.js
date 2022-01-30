import React from "react";
import classes from "./SinglePost.module.css";
function SinglePost(props) {
  const { postImg, title, description } = props;
  return (
    <div className={classes.singlePost}>
      <div className={classes.container}>
        <img className={classes.post_img} src={postImg} alt={"no img"}></img>
        <h1 className={classes.post_title}>{title}</h1>
        <div className={classes.infoContainer}>
          <div className={classes.postInfo}>
            <span className={classes.post_username}>Author : Admin</span>
            <span className={classes.post_date}>1 hour ago</span>
          </div>
          <div className={classes.postEdit}>
            <i className={`${classes.post_icon} far fa-edit`}></i>
            <i className={`${classes.post_icon} fas fa-trash-alt`}></i>
          </div>
        </div>
        <p className={classes.post_description}>{description}</p>
      </div>
    </div>
  );
}

export default SinglePost;
