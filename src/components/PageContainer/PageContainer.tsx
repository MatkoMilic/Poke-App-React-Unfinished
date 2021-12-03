import React from "react";
import style from "./Styles.module.scss";

interface PageContainerProps {
  children?: React.ReactNode;
  styles?: React.CSSProperties;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  styles,
}): JSX.Element => {
  return <div className={`${style.container} ${styles}`}>{children}</div>;
};

PageContainer.defaultProps = {
  children: undefined,
  styles: undefined,
};

export default PageContainer;
