import { FORM_INITIAL_VALUES } from "../../utils/constants";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { MAX_CHAR_NAME_VALIDATION } from "../../utils/constants";
import { MIN_CHAR_NAME_VALIDATION } from "../../utils/constants";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required!")
    .max(
      MAX_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} characters!`
    )
    .min(
      MIN_CHAR_NAME_VALIDATION,
      `Your user name must be less than ${MIN_CHAR_NAME_VALIDATION} characters!`
    ),
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
        <Form>
          <label>
            <span>Name</span>
            <br />
            <Field type="text" name="name"></Field>
            <ErrorMessage component="p" name="name" />
          </label>
          <br />
          <label>
            <span>Number</span>
            <br />
            <Field type="text" name="number"></Field>
            <ErrorMessage component="p" name="number" />
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
