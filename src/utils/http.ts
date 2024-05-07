import axios from "axios";
import {  TOKEN } from "../constants/tokens";

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const interceptor = http.interceptors.request.use(
  function onFulfilled(config) {
    if (!config.headers.Authorization) {
      const access = TOKEN.accessToken;
      

      if (access) {
        config.headers.Authorization = `Bearer ${access}`;
      }
    }
    return config;
  },
  function onReject(error) {
    if (error.response && error.response.status === 401) {
      delete axios.defaults.headers.common.Authorization;
      /*
       * When response code is 401, try to refresh the token.
       * Eject the interceptor so it doesn't loop in case
       * token refresh causes the 401 response
       */
      axios.interceptors.response.eject(interceptor);
    } else {
      return null;
    }
  },
);



export default http;
