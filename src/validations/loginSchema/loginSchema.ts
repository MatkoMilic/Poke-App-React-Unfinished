import * as Yup from "yup";

const loginSchema = Yup.object({
  email: Yup.string().email("Email is invalid").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 charaters")
    .max(
      20,
      "There is no need for your password to be longer than 20 characters."
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

export default loginSchema;
