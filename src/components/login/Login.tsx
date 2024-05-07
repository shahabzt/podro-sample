import React, { FC } from "react";
import PodroLogo from "../../assets/images/LogoType.svg";
import { LoginSheet } from "../../styles/LoginSheet";
import { Caption, LinkedText, Subtitle, Title } from "../../styles/typography";
import {
  Button,
  Input,
  RegisterText,
  WelcomeTexts,
  ErrorMsg,
} from "./Login.Styles";
import { ErrorMessage, useFormik } from "formik";
import registrationFormScheme from "../../utils/validations/registerPhoneNumber";
import { useDispatch } from "react-redux";
import { setPhoneNumber } from "../../store/reducers/verifyReducer";
import { useNavigate } from "react-router";
const Login: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const handleRegister = () => {
    dispatch(
      setPhoneNumber({ activeStep: 1, phoneNumber: values.phoneNumber })
    );
    navigate("/samira")
  };
  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    onSubmit: handleRegister,
    validationSchema: registrationFormScheme,
    initialValues: {
      phoneNumber: "",
    },
  });

  return (
    <LoginSheet>
      <img src={PodroLogo} />
      <WelcomeTexts>
        <Subtitle>به پنل مدیریت تسک پادرو خوش آمدید</Subtitle>
        <Caption>برای ورود، لطفا شماره موبایل خود را وارد کنید</Caption>
      </WelcomeTexts>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Input
          placeholder="شماره موبایل"
          onChange={(e) => setFieldValue("phoneNumber", e.target.value)}
          type="text"
        />
        {!!errors.phoneNumber && <ErrorMsg>{errors.phoneNumber}</ErrorMsg>}

        <Button
          type="submit"
          disabled={!!errors.phoneNumber || !values.phoneNumber.length}
        >
          ارسال کد‌ تایید
        </Button>
      </form>
      <RegisterText>
        <Caption>
          حساب کاربری ندارید؟
          <LinkedText>ثبت نام</LinkedText>
        </Caption>
      </RegisterText>
    </LoginSheet>
  );
};

export default Login;
