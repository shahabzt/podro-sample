import * as yup from "yup";
import { iranPhoneNumberRegex } from "../regexes";

const registrationFormScheme = yup.object().shape({
  phoneNumber: yup
    .string()
    .typeError("ساختار شماره صحیح نمی باشد")
    .matches(iranPhoneNumberRegex, "ساختار شماره صحیح نمی باشد")
    .required("وارد کردن شماره موبایل اجباری است"),
});

export default registrationFormScheme;
