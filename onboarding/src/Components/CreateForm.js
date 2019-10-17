import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const CreateForm = ({ values, touched, errors, status }) => {

  return (
    <div>
      <Form>
        <Field 
        type='text'
        name='name'
        placeholder='name' 
        />
        {touched.name && errors.name && (
          <p>{errors.name}</p>
        )}
        <Field
        type='email'
        name='email'
        placeholder='email'
        />
        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
        <Field
        type='password'
        name='password'
        placeholder='password'
        />
        {touched.password && errors.password && (
          <p>{errors.password}</p>
        )}
        <Field
        type='checkbox'
        name='terms'
        checked={values.terms}
        />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

const FormikCreateForm = withFormik({
  mapPropsToValues({ name, email, password, terms }) {
    return {
      name: name || '',
      email: email || '',
      password: password || '',
      terms: terms || false
    }
  },
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please enter a name'),
    email: Yup.string().required('Please enter a valid e-mail'),
    password: Yup.string().required('Please enter a valid password'),
  })
})(CreateForm);

export default FormikCreateForm;