import classes from "./Register.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import axios from "../../utils/axios";

function Register() {
  const handleSubmit = (values) => {
    const userData = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    axios({
      method: "post",
      url: "api/users/register",
      data: userData,
    }).then((response) => {
      response.status === 200 && setIsSucces(true);
    });
  };
  const [isSucces, setIsSucces] = useState(false);
  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        const passwordRegex = /(?=.*[0-7])/;
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 6 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
        const confirmPasswordRegex = /(?=.*[0-7])/;
        if (!values.confirmPassword) {
          errors.confirmPassword = "Required";
        } else if (values.confirmPassword.length < 8) {
          errors.confirmPassword = "confirmPassword must be 6 characters long.";
        } else if (!confirmPasswordRegex.test(values.confirmPassword)) {
          errors.confirmPassword =
            "Invalid confirmPassword. Must contain one number.";
        } else if (values.password !== values.confirmPassword) {
          errors.confirmPassword = "Passwords do not match";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        handleSubmit(values);
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const { values, isSubmitting, handleChange, handleBlur } = props;
        return (
          <div className={classes.wrapper}>
            <div className={classes.register}>
              <h2 className={classes.h2}>Create Account</h2>
              <Form className={classes.form}>
                <label className={classes.label}>Username</label>
                <Field
                  className={classes.field}
                  name="username"
                  type="text"
                  id="username"
                  value={values.username}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Field>
                <ErrorMessage
                  className={classes.error}
                  name="username"
                  component="div"
                />
                <label className={classes.label}>Email</label>
                <Field
                  className={classes.field}
                  name="email"
                  type="email"
                  id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Field>
                <ErrorMessage
                  className={classes.error}
                  name="email"
                  component="div"
                />
                <label className={classes.label}>Password</label>
                <Field
                  className={classes.field}
                  name="password"
                  type="password"
                  id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Field>
                <ErrorMessage
                  className={classes.error}
                  name="password"
                  component="div"
                />
                <label className={classes.label}>Confirm Password</label>
                <Field
                  className={classes.field}
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                ></Field>
                <ErrorMessage
                  className={classes.error}
                  name="confirmPassword"
                  component="div"
                />
                <button
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Create Account
                </button>
              </Form>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to="/login"
              >
                {isSucces
                  ? "Account Succesfully Created"
                  : "Already have an account?Sign in"}
              </Link>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Register;
