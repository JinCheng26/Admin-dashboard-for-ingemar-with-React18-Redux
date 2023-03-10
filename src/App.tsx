import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.scss";
import "./styles/index.scss";

import Loader from "./layouts/Loader/Loader";
import { useAppDispatch, useAppSelector } from "./hooks";

import AuthRoutes from "./routes/AuthRoutes";
import AuthenticatedRoutes from "./routes/AuthenticatedRoutes";
import { apiGetUserInfo } from "./apis/auth";
import { signIn, signOut } from "./store/auth.slice";

function App() {
  const dispatch = useAppDispatch();

  const isAuthenticating = useAppSelector((store) => store.auth.isAuthenticating);
  const authenticated = useAppSelector((store) => store.auth.authenticated);

  useEffect(() => {
    apiGetUserInfo()
      .then((res) => {
        dispatch(signIn(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(signOut(null));
      });
  }, []);

  if (isAuthenticating) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <React.Suspense fallback={<Loader />}>
        {!authenticated && <AuthRoutes></AuthRoutes>}
        {authenticated && <AuthenticatedRoutes></AuthenticatedRoutes>}
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
