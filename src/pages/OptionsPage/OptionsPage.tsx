import classNames from "classnames";
import React from "react";
import { useNavigate } from "react-router-dom";
import { PageContainer, ThemeContext } from "../../components";
import { removeActiveUser } from "../../constants";
import classes from "./Styles.module.scss";

const OptionsPage = (): JSX.Element => {
  const navigate = useNavigate();
  const { isThemeDark } = React.useContext(ThemeContext);
  const logoutUser = async () => {
    removeActiveUser();
    navigate("/loginpage");
  };
  return (
    <PageContainer>
      <div className={classes.containerOptions}>
        <button
          className={classNames(classes.logOutButtonLight, {
            [classes.logOutButtonDark]: isThemeDark,
          })}
          onClick={logoutUser}
        >
          Log out
        </button>
      </div>
    </PageContainer>
  );
};

export default OptionsPage;
