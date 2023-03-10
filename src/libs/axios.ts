import axios from "axios";
import nprogress from "nprogress";
import config from "../config";

const axiosInstance = axios.create({
  baseURL: config.BACKEND_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (axiosConfig) {
  nprogress.start();
  if (localStorage.getItem(config.AUTH_USER_TOKEN_KEY)) {
    axiosConfig.headers.Authorization = `Bearer ${localStorage.getItem(config.AUTH_USER_TOKEN_KEY)}`;
  }

  return axiosConfig;
});

axiosInstance.interceptors.response.use(
  function (response) {
    nprogress.done();
    return response;
  },
  function (error) {
    nprogress.done();
    return Promise.reject(error);
  }
);

const request = (method: string, url: string, data: any) => {
  if (method === "GET") {
    return axiosInstance.request({
      url,
      method,
      params: data,
    });
  } else {
    return axiosInstance.request({
      url,
      method,
      data,
    });
  }
};

const requests = {
  get: (url: string, data: any) => {
    return request("GET", url, data);
  },
  post: (url: string, data: any) => {
    return request("POST", url, data);
  },
  put: (url: string, data: any) => {
    return request("PUT", url, data);
  },
  delete: (url: string, data: any) => {
    return request("DELETE", url, data);
  },
};

export default requests;
