import React, { useContext, useState } from "react";
import classes from "./Settings.module.css";
import Context from "utils/context";
import axios from "utils/axios";
const siteURL = window.location.href;
function Settings() {
  const { stateAuthReducer: state, dispatchAuthReducer: dispatch } =
    useContext(Context);

  const [user, setUser] = useState({
    isAuthenticated: state.isAuthenticated,
    id: state.id,
    username: state.username,
    email: state.email,
    avatar: state.avatar,
    password: "",
  });
  console.log(user, state);
  const handleOnEditSubmit = (event) => {
    event.preventDefault();
    console.log("editting", state.id);
    axios({
      method: "patch",
      url: `api/users`,
      data: user,
    }).then((response) => {
      console.log(response);
      dispatch({
        type: "EDIT_USER",
        payload: user,
      });
    });
  };
  const handleOnDeleteSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className={classes.settings}>
      <div className={classes.settingsContainer}>
        <h2 className={classes.settingsTitle}>Update your account</h2>
        <form onSubmit={handleOnEditSubmit} className={classes.settingsForm}>
          <label>Profile Picture</label>
          <div className={classes.settingsImgContainer}>
            {state.avatar ? (
              <img
                className={classes.userImg}
                src={state.avatar || `${siteURL}/assets/images/user.png`}
                alt="no img"
              ></img>
            ) : (
              <label
                className={classes.settings_img_select}
                htmlFor="fileInput"
              >
                <i className={`${classes.setting_img_icon} far fa-image`}></i>
              </label>
            )}
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Admin"
            onChange={(event) =>
              setUser({
                ...user,
                username: event.target.value,
              })
            }
            value={user.username || ""}
          ></input>
          <label>Email</label>
          <input
            type="email"
            placeholder="Admin@gmail.com"
            onChange={(event) =>
              setUser({
                ...user,
                email: event.target.value,
              })
            }
            value={user.email || ""}
          ></input>
          <label>Password</label>
          <input
            onChange={(event) =>
              setUser({
                ...user,
                password: event.target.value,
              })
            }
            type="Password"
            value={user.password || ""}
          ></input>
          {state.isAuthenticated && (
            <div className={classes.settings_btn_container}>
              <button
                name="editBtn"
                type="submit"
                className={classes.settingsBtn}
              >
                Update Profile
              </button>
              <button
                name="deleteBtn"
                type="submit"
                className={classes.settingsDeleteBtn}
              >
                Delete Profile
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default Settings;
