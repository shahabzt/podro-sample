import axios, { AxiosResponse } from "axios";
import { ResponseData } from "./getLocationInfo.types";
import { TOKEN } from "../../constants/tokens";
import http from "../../utils/http";

const getLocationInfo = (ipAddress: string) => {
  return http.get<ResponseData>("ipgeo", {
    params: {
      apiKey:TOKEN.accessToken,
      ip:ipAddress,
    },
  }).then(res=>res.data);
};


export default getLocationInfo;
