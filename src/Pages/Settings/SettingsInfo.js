import React, { useState, useContext, useRef } from "react";
import classes from "./SettingsInfo.module.css";
import Context from "utils/context";
import axios from "utils/axios";
const siteURL = window.location.href;

const initialTypes = {
  name: "Name",
  email: "Your mail",
  password: "Password",
  avatar: "Photo",
};
function SettingsInfo(props) {
  const inputArea = useRef(null);

  const { value, type } = props;

  const {
    stateAuthReducer: state,
    dispatchPostsReducer: dispatch,
    dispatchAuthReducer: authDispatch,
  } = useContext(Context);

  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const [user, setUser] = useState({
    isAuthenticated: state.isAuthenticated,
    id: state.id,
    username: state.username,
    email: state.email,
    avatar: state.avatar,
  });
  const handleOnChange = (event) => {
    if (type === "avatar") {
      setInputValue(`${URL.createObjectURL(event.target.files[0])}`);
      setUser({
        ...user,
        [type]: `${URL.createObjectURL(event.target.files[0])}`,
      });
    } else if (type === "name") {
      setInputValue(event.target.value);
      setUser({
        ...user,
        ["username"]: inputValue,
      });
    } else {
      setInputValue(event.target.value);
      setUser({
        ...user,
        [type]: inputValue,
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    axios({
      method: "patch",
      url: `api/users`,
      data: user,
    }).then((response) => {
      dispatch({
        type: "EDIT_USER",
        payload: user,
      });
      authDispatch({
        type: "GET_USER",
        payload: user,
      });
      setIsEditing(false);
    });
  };
  return (
    <form onSubmit={handleOnSubmit} className={classes.form}>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <div className={classes.infoTitle}>{initialTypes[type]}</div>

          <div className={classes.info_description_container}>
            <div className={classes.text_box}>
              <div className={classes.info_text}>
                {type === "avatar" ? (
                  <div className={classes.user_avatar_container}>
                    <img
                      className={classes.user_avatar}
                      src={inputValue || `${siteURL}/assets/images/user.png`}
                    ></img>
                    {isEditing && (
                      <div className={classes.user_avatar_overlay}>
                        <input
                          type="file"
                          id="avatar"
                          style={{ display: "none" }}
                          onChange={handleOnChange}
                        />
                        <label htmlFor={"avatar"}>
                          <i className={"fa-solid fa-camera"}></i>
                        </label>
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    className={classes.user_input}
                    value={inputValue || ""}
                    placeholder={!inputValue ? "******" : state.password}
                    disabled={!isEditing}
                    onChange={handleOnChange}
                    autoFocus={true}
                    ref={inputArea}
                  ></input>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={classes.btnContainer}>
          {isEditing && (
            <button
              type="submit"
              className={classes.saveBtn}
              disabled={!user.isAuthenticated}
            >
              Save
            </button>
          )}
          <button
            type="button"
            onClick={() => {
              setIsEditing(!isEditing);
              !inputArea.current === null && inputArea.current.focus();
            }}
            className={!isEditing ? classes.editBtn : classes.cancelBtn}
            disabled={!user.isAuthenticated}
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>
      </div>
    </form>
  );
}

export default SettingsInfo;
