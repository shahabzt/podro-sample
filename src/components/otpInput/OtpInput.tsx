import React, {
  useState,
  useRef,
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
} from "react";
import { InputContainer, OtpInput } from "./OtpInput.style";
import { FormikErrors } from "formik";

interface OtpInputProps {
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) =>
    | Promise<void>
    | Promise<
        FormikErrors<{
          otpCode: string;
        }>
      >;
}

const OTPInput: React.FC<OtpInputProps> = ({ setFieldValue }) => {
  //States
  const [otp, setOtp] = useState<string[]>(new Array(4).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  //Handlers
  const handleChange = (index: number, value: string) => {
    if (isNaN(Number(value))) {
      return;
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setFieldValue("otpCode", newOtp.join(""));

    if (value !== "" && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, 4);
    const newOtp = [...otp];

    for (let i = 0; i < pasteData.length; i++) {
      newOtp[i] = pasteData[i];
    }

    setOtp(newOtp);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && index > 0 && !otp[index]) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <InputContainer>
      {otp.map((digit, index) => (
        <OtpInput
          key={index}
          type="text"
          maxLength={1}
          value={digit}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleChange(index, e.target.value)
          }
          onPaste={handlePaste}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(e, index)
          }
          ref={(ref) => (inputRefs.current[index] = ref)}
        />
      ))}
    </InputContainer>
  );
};

export default OTPInput;
