import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./loginform.module.css";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please, write email address like aaa@aaa.aaa")
    .required("Required!"),
  password: Yup.string()
    .min(6, "Too short!")
    .max(20, "Too long!")
    .required("Required!"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values)).unwrap();
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={LoginSchema}
    >
      {() => {
        return (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Email</label>
              <Field className={css.formInput} type="text" name="email" />
              <ErrorMessage
                className={css.errorMessage}
                name="email"
                component="span"
              />
            </div>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Password</label>
              <Field className={css.formInput} type="text" name="password" />
              <ErrorMessage
                className={css.errorMessage}
                name="password"
                component="span"
              />
            </div>
            <button className={css.formBtn} type="submit">
              Log In
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
