import React, { useContext } from "react";
import classes from "./NavUser.module.css";
import user from "../../Assets/UserAvatars/user.png";
import { Link } from "react-router-dom";
import { AuthContext } from "App";
function NavUser() {
  const { state } = useContext(AuthContext);
  return (
    <div className={classes.container}>
      <Link to="/settings">
        <img
          className={classes.userImg}
          alt="userImg"
          src={state.authenticatedUser.avatar || user}
        ></img>
      </Link>
      <i className={`${classes.searchIcon} fas fa-search`}></i>
    </div>
  );
}

export default NavUser;
