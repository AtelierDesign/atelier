import * as React from 'react';
import { Formik, FormikHelpers, FormikProps, Form, Field, FieldProps } from 'formik';

interface MyFormValues {
  firstName: string;
  email: string;
}

export const FormikExample: React.FC<{}> = () => {
  const initialValues: MyFormValues = { firstName: '', email: '' };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}>
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="Email" />
          <label htmlFor="firstName">Name</label>
          <Field id="firstName" name="firstName" placeholder="Name" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
