import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AppLayout = lazy(() => import("../layouts/AppLayout"));
const PageUsers = lazy(() => import("../pages/Users/PageUsers"));
const PageProfile = lazy(() => import("../pages/Profile/PageProfile"));
const PageWallet = lazy(() => import("../pages/Wallet/PageWallet"));
const PageMovies = lazy(() => import("../pages/Movies/PageMovies"));

function AuthenticatedRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<AppLayout />}>
        <Route path={`users`} element={<PageUsers />} />
        <Route path={`profile`} element={<PageProfile />} />
        <Route path={`wallet`} element={<PageWallet />} />
        <Route path={`movies`} element={<PageMovies />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AuthenticatedRoutes;
