import React from "react";
import { Outlet } from "react-router-dom";
import { LoginPage } from "../../pages";

const useAuth = (): boolean => {
  let loggedIn = false;
  const isUserLoggedIn = localStorage.getItem("activeUser");
  if (isUserLoggedIn !== null) {
    loggedIn = true;
  }
  return loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <LoginPage />;
};

export default ProtectedRoutes;
