import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LoadingPage,
  LoginPage,
  PokeListPage,
  ProfilePage,
  SettingsPage,
} from "../pages";
import "../global.scss";

const AllRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/loadingpage" element={<LoadingPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route path="/settingspage" element={<SettingsPage />} />
      <Route path="/pokelistpage" element={<PokeListPage />} />
      <Route path="/profilepage" element={<ProfilePage />} />
    </Routes>
  );
};

export default AllRoutes;
