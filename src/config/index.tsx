import * as utils from "../libs/utils";

const { REACT_APP_BACKEND_URL, REACT_APP_TMDB_API_TOKEN, REACT_APP_TMDB_URL } = process.env;

utils.assertIsDefined(REACT_APP_BACKEND_URL);
utils.assertIsDefined(REACT_APP_TMDB_API_TOKEN);
utils.assertIsDefined(REACT_APP_TMDB_URL);

export default {
  REACT_APP_BACKEND_URL,
  BACKEND_API_URL: `${REACT_APP_BACKEND_URL}/api`,
  AUTH_USER_TOKEN_KEY: "api_token",
  TMDB_API_TOKEN: REACT_APP_TMDB_API_TOKEN,
  TMDB_URL: REACT_APP_TMDB_URL,
};
