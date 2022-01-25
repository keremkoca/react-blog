import classes from "./Login.module.css";
import React from "react";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        console.log(values);
        const errors = {};
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
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
          console.log("Logging in", values);
          setSubmitting(false);
        }, 500);
      }}
    >
      {(props) => {
        const {
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
        } = props;

        return (
          <div className={classes.wrapper}>
            <div className={classes.login}>
              <Form className={classes.form}>
                <label className={classes.label} htmlFor="email">
                  Email
                </label>
                <Field
                  className={classes.field}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Enter your email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className={classes.error}
                  name="email"
                  component="div"
                />
                <label className={classes.label} htmlFor="password">
                  Password
                </label>
                <Field
                  className={classes.field}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <ErrorMessage
                  className={classes.error}
                  name="password"
                  component="div"
                />
                <button
                  className={classes.button}
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </button>
              </Form>
              <Link to="/register">Dont have account?Sign up</Link>
            </div>
          </div>
        );
      }}
    </Formik>
  );
}

export default Login;
