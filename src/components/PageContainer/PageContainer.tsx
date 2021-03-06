import React from "react";
import { Header } from "../Header";
import classes from "./Styles.module.scss";
import classnames from "classnames";
import { ThemeContext } from "../ThemeProvider";
interface PageContainerProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  styles,
}): JSX.Element => {
  const { isThemeDark } = React.useContext(ThemeContext);

  return (
    <>
      <Header />
      <div
        id="container"
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

PageContainer.defaultProps = {
  children: undefined,
  styles: undefined,
};
