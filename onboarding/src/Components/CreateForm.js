import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const CreateForm = ({ values, touched, errors, status }) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    status && setUsers(users => [...users, status])
  }, [status])
  return (
    <div>
      <Form>
        <Field 
        type='text'
        name='name'
        placeholder='name' 
        value={values.name}
        />
        {touched.name && errors.name && (
          <p>{errors.name}</p>
        )}
        <p></p>
        <Field
        type='email'
        name='email'
        placeholder='email'
        />
        {touched.email && errors.email && (
          <p>{errors.email}</p>
        )}
        <p></p>
        <Field
        type='password'
        name='password'
        placeholder='password'
        />
        {touched.password && errors.password && (
          <p>{errors.password}</p>
        )}
        <p></p>
        <Field
        type='checkbox'
        name='terms'
        checked={values.terms}
        />
        <button type='submit'>Submit</button>
      </Form>
      {users.map(user => (
        <ul key={user.id}>
          <li>Name: {user.name}</li>
          <li>Email: {user.email}</li>
          <li>Password: {user.passowrd}</li>
        </ul>
      ))}
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
  }),
  handleSubmit(values, {setStatus, resetForm}) {
    axios.post('https://reqres.in/api/users/', values)
    .then(res => {setStatus(res.data); })
    .catch(err => console.log(err.response));
    resetForm();
  },
})(CreateForm);

export default FormikCreateForm;