import { FC, useEffect } from "react";
import { LoginSheet } from "../../styles/LoginSheet";
import PodroIcon from "../../assets/images/LogoType.svg";
import ArrowLeft from "../../assets/images/arrow-left.svg";
import {
  BackIcon,
  HeaderContainer,
  PodroLogo,
  ResendCodeContainer,
} from "./Verification.style";
import { Caption, LinkedText, Subtitle } from "../../styles/typography";
import { useDispatch, useSelector } from "react-redux";
import { resetVerify, setPhoneNumber } from "../../store/reducers/verificationReducer";
import { RootState } from "../../store/store";
import { WelcomeTexts } from "../register/Register.Styles";
import OTPInput from "../otpInput/OtpInput";
import { useTimer } from "../../hooks/useCountDown";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import { Button } from "../../styles/Button";
import { btncontent } from "../../utils/functions/btnContent";
import Toast from "../toast/Toast";
import textConstants from "../../constants/textConstants";

const Verification: FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { value, start, reset, stop } = useTimer({ startsFrom: 60 });

  const phoneNumber = useSelector(
    (state: RootState) => state.setPhoneNumber.phoneNumber
  );
  const handleBack = () => {
    dispatch(setPhoneNumber({ activeStep: 0, phoneNumber: phoneNumber }));
  };

  const handleResetCountDown = () => {
    if (value === 0) {
      reset();
    }
  };

  const handleRegister = () => {
    navigate("/search");
    dispatch(resetVerify())
  };

  const { handleSubmit, values, setFieldValue, errors } = useFormik({
    onSubmit: handleRegister,
    // validationSchema: registrationFormScheme,
    initialValues: {
      otpCode: "",
    },
  });
  useEffect(() => {
    start();
    if (values.otpCode === "1111") {
      stop();
    }
  }, []);

  return (
    <LoginSheet>
      <HeaderContainer>
        <PodroLogo src={PodroIcon} alt="podro" />
        <BackIcon src={ArrowLeft} alt="" onClick={handleBack} />
      </HeaderContainer>
      <WelcomeTexts>
        <Subtitle>
          {textConstants.inputOtpCode}
        </Subtitle>
        <Caption>
          کد تایید برای شماره
          {phoneNumber}
          ارسال شد
        </Caption>
        <LinkedText onClick={handleBack}>
          {textConstants.changeNumber}
        </LinkedText>
      </WelcomeTexts>
      <form onSubmit={handleSubmit} style={{ width: "100%" }}>
        <OTPInput setFieldValue={setFieldValue} />
        <ResendCodeContainer>
          <Caption>
            {textConstants.dontGetCode}
          </Caption>

          <LinkedText onClick={handleResetCountDown}>
            {textConstants.resendCode}
          </LinkedText>
        </ResendCodeContainer>
        <Button type="submit" disabled={values.otpCode !== "1111"}>
          {btncontent(value, values.otpCode)}
        </Button>
      </form>
      {values.otpCode !== "1111" && values.otpCode.length === 4 ? (
        <Toast message={textConstants.toastMsg} />
      ) : null}
    </LoginSheet>
  );
};

export default Verification;
