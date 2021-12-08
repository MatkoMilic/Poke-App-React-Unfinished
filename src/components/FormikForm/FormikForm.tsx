import React from "react";
import { Formik } from "formik";
import { loginSchema } from "../../validations";
import { useOnSubmit } from "../../utils";
import { LoginForm } from "../LoginForm";

export const FormikForm = (): JSX.Element => {
  const { onSubmitRedirect } = useOnSubmit();
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={loginSchema}
      onSubmit={(values) => {
        onSubmitRedirect(values.email, values.password);
      }}
      component={LoginForm}
    />
  );
};
