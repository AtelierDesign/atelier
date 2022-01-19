import React from 'react';
import { Formik } from 'formik';
import { useFormik } from 'formik';

// STYLED ITEMS
import { styled } from 'stitches.config';

const CoverBox = styled('div', {
  zIndex: '200',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  textAlign: 'center',
  margin: 'auto',
  padding: '1rem',
});

export default () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  /*
  const options = {
  method: 'POST',
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
  body: JSON.stringify({profiles: [{email: 'george.washington@klaviyo.com'}]})
};

fetch('https://a.klaviyo.com/api/v2/list/SjPAZJ/subscribe?api_key=WiNjPw', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
*/

  return (
    <CoverBox>
      <form onSubmit={formik.handleSubmit}>
        <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />

        <button type="submit">Submit</button>
      </form>
    </CoverBox>
  );
};
