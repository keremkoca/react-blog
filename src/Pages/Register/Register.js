import classes from "./Register.module.css";
import React from "react";

function Register() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.register}>
        <h2>Create Account</h2>
        <form>
          <label>Username</label>
          <input name="username" type="text"></input>
          <label>Email</label>
          <input name="email" type="email"></input>
          <label>Password</label>
          <input name="password" type="password"></input>
          <label>Confirm Password</label>
          <input name="confirmPassword" type="password"></input>
          <button className={classes.button} type="submit">
            Create Account
          </button>
        </form>
        <span to="/login">Already have an account?Sign in</span>
      </div>
    </div>
  );
}

export default Register;
