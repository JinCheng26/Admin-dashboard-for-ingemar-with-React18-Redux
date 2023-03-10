import axios from "../libs/axios";

export const apiAuthVerify = () => {
  return axios.get("/auth/verify", {});
};

export const apiGetUserInfo = () => {
  return axios.get("/auth/user", {});
};

export const apiSignIn = (username: string, password: string) => {
  return axios.post("/auth/login", { username, password });
};
