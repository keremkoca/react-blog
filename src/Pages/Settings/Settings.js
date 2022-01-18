import React from "react";
import classes from "./Settings.module.css";
import img from "../../Assets/Logo.jpeg";
function Settings() {
  return (
    <div className={classes.settings}>
      <div className={classes.settingsContainer}>
        <h2 className={classes.settingsTitle}>Update your account</h2>
        <form className={classes.settingsForm}>
          <label>Profile Picture</label>
          <div className={classes.settingsImgContainer}>
            <img className={classes.userImg} src={img} alt="no img"></img>
            <label className={classes.userIconLabel} htmlFor="fileInput">
              <i className={`${classes.userIcon} far fa-user-circle`}></i>
            </label>
            <input
              type="file"
              id="fileInput"
              style={{ display: "none" }}
            ></input>
          </div>
          <label>Username</label>
          <input type="text" placeholder="Admin"></input>
          <label>Email</label>
          <input type="email" placeholder="Admin@gmail.com"></input>
          <label>Password</label>
          <input type="Password"></input>
          <div className={classes.settings_btn_container}>
            <button type="submit" className={classes.settingsBtn}>
              Update
            </button>
            <button className={classes.settingsDeleteBtn}>
              Delete Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Settings;
