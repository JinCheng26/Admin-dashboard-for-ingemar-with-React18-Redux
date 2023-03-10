import React, { lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const AuthLayout = lazy(() => import("../pages/auth/AuthLayout"));
const PageLogin = lazy(() => import("../pages/auth/Login"));
const PageRegister = lazy(() => import("../pages/auth/Register"));

export default function AuthRoutes() {
  return (
    <Routes>
      <Route path={`/`} element={<AuthLayout />}>
        <Route index element={<PageLogin />} />
        <Route path={`auth/login`} element={<PageLogin />} />
        <Route path={`auth/signup`} element={<PageRegister />} />
        <Route path="*" element={<Navigate to="/"></Navigate>} />
      </Route>
    </Routes>
  );
}
