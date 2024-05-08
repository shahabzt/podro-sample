import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Register from "../../components/register/Register";
import Verification from "../../components/verification/Verification";

const Login: FC = () => {
  const activeIndex = useSelector(
    (state: RootState) => state.setPhoneNumber.activeStep
  );
  return (
    <>
      {activeIndex === 0 ? (
        <Register />
      ) : activeIndex === 1 ? (
        <Verification />
      ) : null}
    </>
  );
};

export default Login;
