import React, { useContext, useState } from "react";
import classes from "./SinglePost.module.css";
import Context from "utils/context";
function SinglePost(props) {
  const { postImg, title, description, username, userID } = props;
  const { stateAuthReducer: state } = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState({
    title: title,
    img: postImg,
    description: description,
    username: username,
    userID: userID,
  });
  const handleEdit = () => {
    setIsEditing(true);
  };
  return (
    <div className={classes.singlePost}>
      <div className={classes.container}>
        <img className={classes.post_img} src={postImg} alt={"no img"}></img>
        {isEditing ? (
          <input type="text" value={post.title} />
        ) : (
          <h1 className={classes.post_title}>{title}</h1>
        )}
        <div className={classes.infoContainer}>
          <div className={classes.postInfo}>
            <span className={classes.post_username}>Author : {username}</span>
            <span className={classes.post_date}>1 hour ago</span>
          </div>
          {userID === state.id && (
            <div className={classes.postEdit}>
              <i
                onClick={handleEdit}
                className={`${classes.post_icon} far fa-edit`}
              ></i>
              <i className={`${classes.post_icon} fas fa-trash-alt`}></i>
            </div>
          )}
        </div>
        {isEditing ? (
          <input type="text" value={post.description} />
        ) : (
          <p className={classes.post_description}>{description}</p>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
