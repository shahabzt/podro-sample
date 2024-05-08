import { FC } from "react";
import PodroLogo from "../../assets/images/LogoType.svg";
import { LoginSheet } from "../../styles/LoginSheet";
import { Caption, LinkedText, Subtitle, Title } from "../../styles/typography";
import { Input, RegisterText, WelcomeTexts, ErrorMsg } from "./Register.Styles";
import { useFormik } from "formik";
import registrationFormScheme from "../../utils/validations/registerPhoneNumber";
import { useDispatch, useSelector } from "react-redux";
import { setPhoneNumber } from "../../store/reducers/verificationReducer";
import { RootState } from "../../store/store";
import { Button } from "../../styles/Button";
import textConstants from "../../constants/textConstants";
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
        <Subtitle>{textConstants.welcome}</Subtitle>
        <Caption>{textConstants.inputPhoneNumber}</Caption>
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
          {textConstants.registerCode}
        </Button>
      </form>
      <RegisterText>
        <Caption>
          {textConstants.noAccount}
          <LinkedText>{textConstants.createAccount}</LinkedText>
        </Caption>
      </RegisterText>
    </LoginSheet>
  );
};

export default Register;
