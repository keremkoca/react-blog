import React, { useContext } from "react";
import classes from "./NavUser.module.css";
import { Link } from "react-router-dom";
import Context from "utils/context";
const siteURL = window.location.href;
function NavUser() {
  const { stateAuthReducer: state } = useContext(Context);
  return (
    <div className={classes.container}>
      <Link to="/settings">
        <img
          className={classes.userImg}
          alt="userImg"
          src={state.avatar || `${siteURL}/assets/images/user.png`}
        ></img>
      </Link>
      <i className={`${classes.searchIcon} fas fa-search`}></i>
    </div>
  );
}

export default NavUser;
