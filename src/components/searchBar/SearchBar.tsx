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
import { LocationInfo } from "../../services/getLocationInfo/getLocationInfo.types";
import getLocationInfo from "../../services/getLocationInfo/getLocationInfo";

const SearchBar: FC = () => {
    const [data, setData] = useState<LocationInfo| null>(null)
    console.log(data)
    const handleRegister = ()=>{
      getLocationInfo(values.ipNumber).then(res=>setData(res))
    }
    const { handleSubmit, values, setFieldValue, errors } = useFormik({
        onSubmit: handleRegister,
        // validationSchema: registrationFormScheme,
        initialValues: {
          ipNumber: ""
        },
      });
  return (
    <SearchBarSheet>
      <Title $color="">آی پی مد نظر خود را پیدا کنید</Title>
      <Subtitle color="#7E838F" fontWeight={400}>
        اگر بتوانید آدرس IPv4 یا IPv6 یک کاربر اینترنت را بیابید، می توانید با
        استفاده از ابزار جستجوی IP ما، ایده ای از آن کشور یا جهان پیدا کنید. چه
        باید کرد: آدرس IP مورد نظر خود را در کادر زیر وارد کنید، سپس روی "دریافت
        جزئیات IP" کلیک کنید.
      </Subtitle>
      <SearchBoxContainer onSubmit={handleSubmit}>
        <SearchInputContainer>
          <SearchIcon src={SearchIconNormal} alt="" />
          <SearchInput type="text" placeholder="جستجو" onChange={(e)=>setFieldValue("ipNumber", e.target.value)} />
        </SearchInputContainer>
        <SearchButton type="submit">
          <img src={SearchIconNormalWhite} alt="" />
        </SearchButton>
      </SearchBoxContainer>
    </SearchBarSheet>
  );
};

export default SearchBar;
