import { FC, useEffect, useState } from "react";
import {
  InformationContainer,
  LocationContainer,
} from "./LocationInformation.style";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import LocationFactory from "../locationFactory/LocationFactory";
import MapLocation from "../../assets/images/Rectangle.png";
const LocationInformation: FC = () => {
  const data = useSelector((state: RootState) => state.locationList);
  const [newElementIndex, setNewElementIndex] = useState(-1);
  useEffect(() => {
    setNewElementIndex(data.length - 1);
  }, [data.length]);

  return (
    <>
      {data.map((location, index) => {
        return (
          <LocationContainer
            key={index}
            className={newElementIndex === index ? "show" : ""}
          >
            <div>
              <img src={MapLocation} alt="map" />
            </div>
            <InformationContainer>
              <LocationFactory locationObject={location} />
            </InformationContainer>
          </LocationContainer>
        );
      })}
    </>
  );
};

export default LocationInformation;
