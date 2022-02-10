import React, { useContext, useState } from "react";
import classes from "./SinglePost.module.css";
import Context from "utils/context";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";
function SinglePost(props) {
  const { postImg, title, description, createdAt, username, id, userID } =
    props;
  const { stateAuthReducer: state } = useContext(Context);
  const { dispatchPostsReducer: dispatch } = useContext(Context);
  const [isEditing, setIsEditing] = useState(false);
  const [post, setPost] = useState({
    id: id,
    title: title,
    img: postImg,
    description: description,
    username: username,
    userID: userID,
    createdAt: createdAt,
  });
  const navigate = useNavigate();
  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "EDIT_POST",
      payload: post,
    });
    setIsEditing(false);
    navigate("/");
  };
  console.log(post.createdAt);
  return (
    <div className={classes.singlePost}>
      <div className={classes.container}>
        <img className={classes.post_img} src={postImg} alt={"no img"}></img>

        <form onSubmit={handleOnSubmit} className={classes.post_form}>
          {isEditing ? (
            <input
              type="text"
              className={classes.post_title_input}
              value={post.title}
              onChange={(event) =>
                setPost({
                  ...post,
                  title: event.target.value,
                })
              }
            />
          ) : (
            <h1 className={classes.post_title}>{post.title}</h1>
          )}
          {!isEditing && (
            <div className={classes.infoContainer}>
              <div className={classes.postInfo}>
                {username && (
                  <span className={classes.post_username}>
                    Author : {username}
                  </span>
                )}
                {post.createdAt && (
                  <Moment className={classes.post_date} fromNow>
                    {post.createdAt}
                  </Moment>
                )}
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
          )}
          {isEditing ? (
            <textarea
              type="text"
              className={classes.post_description_input}
              value={post.description}
              onChange={(event) =>
                setPost({
                  ...post,
                  description: event.target.value,
                })
              }
            ></textarea>
          ) : (
            <p className={classes.post_description}>{post.description}</p>
          )}
          {isEditing && (
            <div className={classes.infoContainer}>
              <div className={classes.postInfo}>
                <span className={classes.post_username}>
                  Author : {username}
                </span>
                <span className={classes.post_date}>1 hour ago</span>
              </div>
              {userID === state.id && !isEditing ? (
                <div className={classes.postEdit}>
                  <i
                    onClick={handleEdit}
                    className={`${classes.post_icon} far fa-edit`}
                  ></i>
                  <i className={`${classes.post_icon} fas fa-trash-alt`}></i>
                </div>
              ) : (
                <button type="submit" className={classes.post_edit_SubmitBtn}>
                  Publish
                </button>
              )}
            </div>
          )}
        </form>
      </div>
    </div>
  );
  //
}

export default SinglePost;
