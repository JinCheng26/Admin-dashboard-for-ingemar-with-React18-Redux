import config from "../config";
import axios from "axios";

const Axios = axios.create({
  baseURL: config.TMDB_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${config.TMDB_API_TOKEN}`,
  },
});

export const apiSearchMovie = async (keyword: string) => {
 return  Axios.get(`/search/movie?query=${keyword}`);
};
