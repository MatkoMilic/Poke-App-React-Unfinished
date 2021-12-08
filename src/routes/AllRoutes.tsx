import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  LoadingPage,
  LoginPage,
  PokeListPage,
  ProfilePage,
  OptionsPage,
} from "../pages";
import "../global.scss";
import ProtectedRoutes from "../components/ProtectedRoutes/ProtectedRoutes";

const AllRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/loginpage" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/optionspage" element={<OptionsPage />} />
        <Route path="/pokelistpage" element={<PokeListPage />} />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;
