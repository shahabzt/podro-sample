import { FC, useState } from "react";
import { Subtitle, Title } from "../../styles/typography";
import {
  SearchBoxContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
  SectionContainer,
} from "./SearchBar.style";
import SearchIconNormal from "../../assets/images/SearchNoraml.svg";
import SearchIconNormalWhite from "../../assets/images/search-normal.svg";
import { useFormik } from "formik";
import getLocationInfo from "../../services/getLocationInfo/getLocationInfo";
import textConstants from "../../constants/textConstants";
import { useDispatch } from "react-redux";
import { setNewLocation } from "../../store/reducers/locationListReducer";
import { filteredLocationData } from "../../utils/functions/filteredLocationData";
import Toast from "../toast/Toast";
import useThrottle from "../../hooks/useTrottle";
import { ipRegisterSchema } from "../../utils/validations/ipRegisterSchema";

const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [fetchErrors, setFetchErrors] = useState<string | null>(null);
  const [showLocationInfo, setShowLocationInfo] = useState(false);
  const throttledHandleRegister = useThrottle({
    maxRequests: 5,
    interval: 60000,
  });

  const handleRegister = () => {
    if (!isFetching) {
      setIsFetching(true);
      setFetchErrors(null);
      getLocationInfo(values.ipNumber)
        .then((res) => {
          const filteredLocationsData = filteredLocationData(res);
          dispatch(setNewLocation(filteredLocationsData));
          setIsFetching(false);
          setShowLocationInfo(true);
        })
        .catch((err) => {
          setIsFetching(false);
          if (err.response && err.response.status === 400) {
            setFetchErrors(textConstants.tryAgain);
          } else if (err.response && err.response.status === 500) {
            setFetchErrors(textConstants.serverNotFound);
          } else {
            setFetchErrors(textConstants.noService);
          }
        });
    }
  };

  const handleThrottledRegister = () => {
    if (!isFetching) {
      setIsFetching(true);
      setFetchErrors(null);
      throttledHandleRegister(handleRegister);
    }
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    onSubmit: handleThrottledRegister,
    validationSchema: ipRegisterSchema,
    initialValues: {
      ipNumber: "",
    },
  });

  return (
    <>
      <Title $color="">{textConstants.searchTitle}</Title>
      <Subtitle color="#7E838F" fontWeight={400}>
        {textConstants.searchCaption}
      </Subtitle>
      <SearchBoxContainer onSubmit={handleSubmit}>
        <SearchInputContainer>
          <SearchIcon src={SearchIconNormal} alt="" />
          <SearchInput
            type="text"
            placeholder="جستجو"
            onChange={(e) => setFieldValue("ipNumber", e.target.value)}
          />
        </SearchInputContainer>
        <SearchButton type="submit">
          <img src={SearchIconNormalWhite} alt="" />
        </SearchButton>
      </SearchBoxContainer>
      {errors.ipNumber && <div style={{ color: "red" }}>{errors.ipNumber}</div>}

      {fetchErrors && <Toast message={fetchErrors} />}
    </>
  );
};

export default SearchBar;
