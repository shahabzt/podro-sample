import * as yup from "yup";
import { ipRegex } from "../regexes";

export const ipRegisterSchema = yup.object().shape({
  ipNumber: yup
    .string()
    .typeError("ساختار شماره صحیح نمی باشد")
    .matches(ipRegex, "آدرس وارد شده معتبر نیست."),
});
