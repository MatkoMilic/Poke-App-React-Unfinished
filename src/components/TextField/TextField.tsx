import React from "react";
import { ErrorMessage, useField, FieldHookConfig } from "formik";
import classNames from "classnames";
import classes from "./Styles.module.scss";
import { ThemeContext } from "../ThemeProvider";

interface TextFieldProps {
  label: string;
}

export const TextField: React.FC<TextFieldProps & FieldHookConfig<string>> = (
  props: TextFieldProps & FieldHookConfig<string>
): JSX.Element => {
  const [field] = useField(props);
  const { isThemeDark } = React.useContext(ThemeContext);
  return (
    <div className={"signUpEntireDiv"}>
      <label
        className={classNames(classes.labelLight, {
          [classes.labelDark]: isThemeDark,
        })}
        htmlFor={field.name}
      >
        {props.label}
      </label>
      <input className={classes.input} {...field} autoComplete="off" />
      <ErrorMessage
        name={field.name}
        className={classes.errorMessage}
        render={(message) => (
          <div className={classes.errorMessage}>{message}</div>
        )}
      />
    </div>
  );
};
