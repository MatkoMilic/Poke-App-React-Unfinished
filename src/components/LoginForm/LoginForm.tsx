import React from "react";
import classNames from "classnames";
import { Form } from "formik";
import { TextField } from "../TextField";
import classes from "./Styles.module.scss";
import { ThemeContext } from "../ThemeProvider";

const LoginForm = (): JSX.Element => {
  const { isThemeDark } = React.useContext(ThemeContext);
  return (
    <div className={"signUpEntireDiv"}>
      <h1 className={classes.signUpH1}>Sign Up</h1>
      <Form>
        <TextField value="" label="Email" name="email" type="email" />
        <TextField value="" label="Password" name="password" type="password" />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
        />
        <div className={classes.containerButtons}>
          <button
            className={classNames(classes.signUpButtonLight, {
              [classes.signUpButtonDark]: isThemeDark,
            })}
            type="submit"
          >
            Sign Up
          </button>
          <button
            className={classNames(classes.resetButtonLight, {
              [classes.resetButtonDark]: isThemeDark,
            })}
            type="reset"
          >
            Reset
          </button>
        </div>
      </Form>
    </div>
  );
};

export default LoginForm;
