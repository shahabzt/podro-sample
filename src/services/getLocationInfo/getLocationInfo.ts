
import { LocationInfo } from "./getLocationInfo.types";

import http from "../../utils/http";

const getLocationInfo = async (ipAddress: string) => {
  const res = await http.get<LocationInfo>(ipAddress);
  return res.data;
};


export default getLocationInfo;
