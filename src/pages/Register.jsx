import React from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'


const Register = () => {
    return (
        <div className="singup">
            <h1>Sing up</h1>


            {/* Start Form */}
            <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
 
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <div className="span-2"><TextField label="Email" name="email" type="text"  /></div>
            <button className="btn span-2" type="submit">Submit</button>
          </Form>
        </div>
      )}
    </Formik>
        </div>
    )
}

export default Register
