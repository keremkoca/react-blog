import React from "react";
import classes from "./SinglePost.module.css";
import imgsrc from "../../../../Assets/SinglePage.jpeg";
function SinglePost() {
  return (
    <div className={classes.single_post}>
      <div className={classes.single_post_container}>
        <img
          className={classes.single_post_img}
          src={imgsrc}
          alt={"no img"}
        ></img>
        <h1 className={classes.single_post_title}>This is a Detailed Post</h1>

        <div className={classes.single_post_info}>
          <span className={classes.single_post_user}>
            Author : DassakKebabi
          </span>
          <span className={classes.single_post_date}>1 hour ago</span>
          <div className={classes.single_post_edit}>
            <i className="classes.single_post_icon far fa-edit"></i>
            <i className="classes.single_post_icon far fa-trash-alt"></i>
          </div>
        </div>
        <p>
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
