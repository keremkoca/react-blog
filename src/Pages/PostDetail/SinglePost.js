import React from "react";
import classes from "./SinglePost.module.css";
import imgsrc from "../../Assets/SinglePage.jpeg";
function SinglePost() {
  return (
    <div className={classes.singlePost}>
      <div className={classes.container}>
        <img className={classes.post_img} src={imgsrc} alt={"no img"}></img>
        <h1 className={classes.post_title}>This is a Detailed Post</h1>
        <div className={classes.infoContainer}>
          <div className={classes.postInfo}>
            <span className={classes.post_username}>Author : DassakKebabi</span>
            <span className={classes.post_date}>1 hour ago</span>
          </div>
          <div className={classes.postEdit}>
            <i className={`${classes.post_icon} far fa-edit`}></i>
            <i className={`${classes.post_icon} fas fa-trash-alt`}></i>
          </div>
        </div>
        <p className={classes.post_description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ipsum
          tortor, sollicitudin non felis convallis, placerat sagittis risus.
          Aliquam erat volutpat. Proin suscipit pretium accumsan. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Vivamus ipsum tortor,
          sollicitudin non felis convallis, placerat sagittis risus. Aliquam
          erat volutpat. Proin suscipit pretium accumsan. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Vivamus ipsum tortor, sollicitudin
          non felis convallis, placerat sagittis risus. Aliquam erat volutpat.
          Proin suscipit pretium accumsan. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Vivamus ipsum tortor, sollicitudin non
          felis convallis, placerat sagittis risus. Aliquam erat volutpat. Proin
          suscipit pretium accumsan. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus ipsum tortor, sollicitudin non felis
          convallis, placerat sagittis risus. Aliquam erat volutpat. Proin
          suscipit pretium accumsan. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus ipsum tortor, sollicitudin non felis
          convallis, placerat sagittis risus. Aliquam erat volutpat. Proin
          suscipit pretium accumsan.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
