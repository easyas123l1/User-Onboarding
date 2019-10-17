import React, {useState, useEffect} from "react";
import axios from "axios";
import { withFormik, Form, Field } from "formik";
import * as Yup from "yup";

const CreateForm = () => {

  return (
    <div>
      <Form>
        <Field 
        type='text'
        name='name'
        placeholder='name' 
        />
        <Field
        type='email'
        name='email'
        placeholder='email'
        />
        <Field
        type='password'
        name='password'
        placeholder='password'
        />
        <Field
        type='checkbox'
        name='terms'
        />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  )
}

export default CreateForm;