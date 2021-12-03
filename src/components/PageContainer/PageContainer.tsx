import React from "react";
import Header from "../Header/Header";
import classes from "./Styles.module.scss";

interface PageContainerProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  styles,
}): JSX.Element => {
  return (
    <>
      <Header />
      <div className={`${classes.container} ${styles}`}>{children}</div>
    </>
  );
};

PageContainer.defaultProps = {
  children: undefined,
  styles: undefined,
};

export default PageContainer;
