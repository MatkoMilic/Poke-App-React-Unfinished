import React from "react";
import classes from "./Styles.module.scss";
import classnames from "classnames";
import { ThemeContext } from "../ThemeProvider";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

interface PageContainerProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

export const PageContainerLogin: React.FC<PageContainerProps> = ({
  children,
  styles,
}): JSX.Element => {
  const { isThemeDark } = React.useContext(ThemeContext);

  return (
    <>
      <HeaderLogin />
      <div
        className={classnames(classes.container, {
          [classes.containerdark]: isThemeDark,
        })}
        style={styles}
      >
        {children}
      </div>
    </>
  );
};

PageContainerLogin.defaultProps = {
  children: undefined,
  styles: undefined,
};
