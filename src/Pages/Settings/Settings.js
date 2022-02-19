import React, { useContext, useState } from "react";
import classes from "./Settings.module.css";
import Context from "utils/context";

import SettingsInfo from "./SettingsInfo";
const siteURL = window.location.href;
function Settings() {
  const {
    stateAuthReducer: state,
    dispatchPostsReducer: postsDispatch,
    dispatchAuthReducer: dispatch,
  } = useContext(Context);

  const [user, setUser] = useState({
    isAuthenticated: state.isAuthenticated,
    id: state.id,
    username: state.username,
    email: state.email,
    avatar: state.avatar,
    password: null,
  });

  return (
    <div className={classes.settings}>
      <div className={classes.settingsContainer}>
        <div className={classes.settings_title_container}>
          <h2 className={classes.settingsTitle}>About you</h2>
        </div>
        <SettingsInfo type="name" value={user.username}></SettingsInfo>
        <SettingsInfo type="email" value={user.email}></SettingsInfo>
        <SettingsInfo type="password" value={user.password}></SettingsInfo>
        <SettingsInfo type="avatar" value={user.avatar}></SettingsInfo>
      </div>
    </div>
  );
}

export default Settings;
