import * as yup from 'yup';

const phoneRegExp = /^(\+98|0)?9(1[0-9]|2[0-9]|3[0-9]|4[0-9]|90|91|20|21|22|23|30|31|32|33|34|35|36|37|38|39|90|91|92|93|94|99)\d{7}$/;

const registrationFormScheme = yup.object().shape({
  phoneNumber: yup
    .string()
    .typeError('ساختار شماره صحیح نمی باشد')
    .matches(phoneRegExp, 'ساختار شماره صحیح نمی باشد')
    .required('وارد کردن شماره موبایل اجباری است'),
    
});

export default registrationFormScheme;