import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const FORM_INITIAL_VALUES = {
  name: "",
  number: "",
};

const MAX_CHAR_NAME_VALIDATION = 50;
const MIN_CHAR_NAME_VALIDATION = 3;

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Your user name must be at least ${MIN_CHAR_NAME_VALIDATION} characters!`
    )
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    )
    .required("Name is required!"),
  number: Yup.string().required("Number is required!"),
});

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    addContact(values);
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={FORM_INITIAL_VALUES}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label>
            <span>Name</span>
            <br />
            <Field type="text" name="name" className={css.formInput}></Field>
            <ErrorMessage className={css.message} component="p" name="name" />
          </label>

          <label>
            <span>Number</span>
            <br />
            <Field
              type="number"
              name="number"
              className={css.formInput}
            ></Field>
            <ErrorMessage className={css.message} component="p" name="number" />
          </label>
          <button type="submit" className={css.formBtn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
