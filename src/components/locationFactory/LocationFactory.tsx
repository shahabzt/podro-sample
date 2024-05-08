import { FC } from "react";
import { FilteredDataProps } from "../../store/reducers/locationListReducer";
import { Subtitle } from "../../styles/typography";

interface LocationFactoryProps {
  locationObject: FilteredDataProps;
}

const LocationFactory: FC<LocationFactoryProps> = ({ locationObject }) => {
  const pairLocationValues = Object.entries(locationObject);
  return (
    <>
      {pairLocationValues.map(([key, value]) => {
        return (
          <Subtitle key={key} color="#7E838F" fontWeight={400}>
            {key.includes("ipAddress")
              ? "Ip Address: "
              : `${key.charAt(0).toUpperCase()}${key.slice(1)}: `}
            <span style={{ fontSize: "20px", fontWeight: 500 }}> {value} </span>
          </Subtitle>
        );
      })}
    </>
  );
};

export default LocationFactory;
