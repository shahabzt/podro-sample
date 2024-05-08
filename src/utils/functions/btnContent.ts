export function btncontent(value: number, code: string) {
  if (value === 0 && code !== "1111") {
    return "ارسال مجدد";
  } else if (code.length < 4 && code !== "1111") {
    return value;
  } else if (code === "1111") {
    return "تایید";
  } else {
    return value;
  }
}
