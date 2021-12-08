import React from "react";
import { FormikForm, ThemeContext } from "../../components";
import TwoFrontDark from "../../assets/TwoFrontDark.jpg";
import TwoFrontLight from "../../assets/TwoFrontLight.png";
import classes from "./Styles.module.scss";
import { PageContainerLogin } from "../../components";

const LoginPage = (): JSX.Element => {
  const { isThemeDark } = React.useContext(ThemeContext);
  return (
    <PageContainerLogin>
      <div className={classes.containerMain}>
        <div className="LoginPage">
          <FormikForm />
          <h1 className={classes.loginInfo}>
            {
              "Please login in, if you don't have an account you will automatically get one."
            }
          </h1>
        </div>
        <div className={classes.divImage}>
          {isThemeDark ? (
            <img className={classes.image} src={TwoFrontDark} alt="" />
          ) : (
            <img className={classes.image} src={TwoFrontLight} alt="" />
          )}
        </div>
      </div>
    </PageContainerLogin>
  );
};

export default LoginPage;
