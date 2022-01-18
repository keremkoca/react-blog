import classes from "./Login.module.css";
import React from "react";

function Login() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.login}>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" name="email"></input>
          <label htmlFor="password">Password</label>
          <input name="password" type="password"></input>
          <button className={classes.button} type="submit">
            LOGIN
          </button>
        </form>
        <span to="/register">Dont have account?Sign up</span>
      </div>
    </div>
  );
}

export default Login;
