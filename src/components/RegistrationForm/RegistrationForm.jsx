import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./registrationform.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short!")
    .max(10, "Too long!")
    .required("Required!"),
  email: Yup.string()
    .email("Please, write email address like aaa@aaa.aaa")
    .required("Required!"),
  password: Yup.string()
    .min(6, "Too short!")
    .max(20, "Too long!")
    .required("Required!"),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      {() => {
        return (
          <Form className={css.form}>
            <div className={css.formGroup}>
              <label className={css.formLabel}>Username</label>
              <Field className={css.formInput} type="text" name="name" />
              <ErrorMessage
                className={css.errorMessage}
                name="name"
                component="span"
              />
            </div>
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
              Sign Up
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default RegistrationForm;
