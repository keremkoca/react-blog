import React, { useContext } from "react";
import classes from "./Write.module.css";
import { useState } from "react";
import Context from "utils/context";
import axios from "utils/axios";
import { useNavigate } from "react-router-dom";
function Write() {
  let navigate = useNavigate();
  const { stateAuthReducer: authState } = useContext(Context);
  const { statePostsReducer: postState, dispatchPostsReducer: dispatch } =
    useContext(Context);
  const [newPost, setNewPost] = useState({
    featured: true,
    userID: authState.id,
    id: Date.now(),
    img: null,
    createdAt:'',
    title: "",
    description: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("submitted");
    axios({
      method: "post",
      url: "api/posts",
      data: newPost,
    })
      .then((response) => {
        console.log(response);
        dispatch({
          type: "ADD_POST",
          payload: newPost,
        });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(postState.posts);
  };
  return (
    <div className={classes.write}>
      {newPost.img ? (
        <img className={classes.write_img} src={newPost.img} alt="no img"></img>
      ) : (
        <div className={classes.write_img_container}>
          <label className={classes.write_img_select} htmlFor="fileInput">
            <i className={`${classes.write_icon} far fa-image`}></i>
          </label>
        </div>
      )}
      <form onSubmit={handleSubmit} className={classes.writeForm}>
        <div className={classes.form_container}>
          <input
            type="file"
            id="fileInput"
            onChange={(event) =>
              setNewPost({
                ...newPost,
                img: URL.createObjectURL(event.target.files[0]),
              })
            }
            style={{ display: "none" }}
          ></input>
          <input
            value={newPost.title}
            type="text"
            name="title"
            onChange={(event) =>
              setNewPost({
                ...newPost,
                title: event.target.value,
              })
            }
            placeholder="Title"
            className={classes.input_title}
            autoFocus={true}
          ></input>
        </div>
        <div className={classes.form_container}>
          <textarea
            className={classes.input_text}
            onChange={(event) =>
              setNewPost({
                ...newPost,
                description: event.target.value,
              })
            }
            name="description"
            value={newPost.description}
            type="text"
            placeholder="Enter your description"
          ></textarea>
        </div>
        <button type="submit" className={classes.writeSubmitBtn}>
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
