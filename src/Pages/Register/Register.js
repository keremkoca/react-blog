import classes from "./Register.module.css";
import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="/login">Already have an account?Sign in</Link>
      </div>
    </div>
  );
}

export default Register;
