import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = (): JSX.Element => {
  const navigate = useNavigate();
  const chooseNavigator = async () => {
    const isUserLoggedIn = localStorage.getItem("activeUser");
    if (isUserLoggedIn !== null) {
      navigate("/profilepage");
    } else {
      navigate("/loginpage");
    }
  };

  useEffect(() => {
    chooseNavigator();
  });

  return <div className="LoadingPage"></div>;
};

export default LoadingPage;
