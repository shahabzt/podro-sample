import { ResponseData } from "../../services/getLocationInfo/getLocationInfo.types";
import { FilteredDataProps } from "../../store/reducers/locationListReducer";
import { ipv4Regex } from "../regexes";

export function filteredLocationData(res: ResponseData): FilteredDataProps {
  const checkedIp = res.ip.match(ipv4Regex) ? `${res.ip} (IPv4)` : `${res.ip.slice(0,6)}... (IPv6)`
  return {
    ipAddress: checkedIp,
    country: res.country_name,
    region: res.state_prov,
    city: res.city,
    latitude: res.latitude,
    Longitude: res.longitude,
  };
}
