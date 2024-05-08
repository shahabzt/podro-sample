import { FC, useState } from "react";
import { SearchBarSheet } from "../../styles/SearchBarSheet";
import { Subtitle, Title } from "../../styles/typography";
import {
  SearchBoxContainer,
  SearchButton,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
} from "./SearchBar.style";
import SearchIconNormal from "../../assets/images/SearchNoraml.svg";
import SearchIconNormalWhite from "../../assets/images/search-normal.svg";
import { useFormik } from "formik";
import { ResponseData } from "../../services/getLocationInfo/getLocationInfo.types";
import getLocationInfo from "../../services/getLocationInfo/getLocationInfo";
import textConstants from "../../constants/textConstants";
import { useDispatch } from "react-redux";
import { setNewLocation } from "../../store/reducers/locationListReducer";

const SearchBar: FC = () => {
  const dispatch = useDispatch();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = () => {
    if (!isFetching) {
      setIsFetching(true);
      setError(null);
      getLocationInfo(values.ipNumber)
        .then((res) => {
          dispatch(setNewLocation(res));
          setIsFetching(false);
        })
        .catch((err) => {
          setIsFetching(false);
          if (err.response && err.response.status === 400) {
            setError(textConstants.tryAgain);
          } else if (err.response && err.response.status === 500) {
            setError(textConstants.serverNotFound);
          } else {
            setError(textConstants.noService);
          }
        });
    }
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    onSubmit: handleRegister,
    initialValues: {
      ipNumber: "",
    },
  });

  return (
    <SearchBarSheet>
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
      {error && <div style={{ color: "red" }}>{error}</div>}
    </SearchBarSheet>
  );
};

export default SearchBar;
