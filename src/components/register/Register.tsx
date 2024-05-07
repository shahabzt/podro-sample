import { FC } from "react";
import PodroLogo from "../../assets/images/LogoType.svg";
import { LoginSheet } from "../../styles/LoginSheet";
import { Caption, LinkedText, Subtitle, Title } from "../../styles/typography";
import { Input, RegisterText, WelcomeTexts, ErrorMsg } from "./Register.Styles";
import { useFormik } from "formik";
import registrationFormScheme from "../../utils/validations/registerPhoneNumber";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../store/reducers/verifyReducer";
import { RootState } from "../../store/store";
import { Button } from "../../styles/Button";

const Register: FC = () => {
  const dispatch = useDispatch();
  const persistPhoneNumber = useSelector(
    (state: RootState) => state.setPhoneNumber.phoneNumber
  );
  const handleRegister = () => {
    dispatch(
      setPhoneNumber({ activeStep: 1, phoneNumber: values.phoneNumber })
    );
  };
  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    onSubmit: handleRegister,
    validationSchema: registrationFormScheme,
    initialValues: {
      phoneNumber: persistPhoneNumber ? persistPhoneNumber : "",
    },
  });

  return (
    <LoginSheet>
      <img src={PodroLogo} alt="podro" />
      <WelcomeTexts>
        <Subtitle>به پنل مدیریت تسک پادرو خوش آمدید</Subtitle>
        <Caption>برای ورود، لطفا شماره موبایل خود را وارد کنید</Caption>
      </WelcomeTexts>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <Input
          placeholder="شماره موبایل"
          onChange={(e) => setFieldValue("phoneNumber", e.target.value)}
          type="text"
          value={values.phoneNumber}
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

export default Register;
