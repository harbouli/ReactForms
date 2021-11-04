import React from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as Yup from 'yup'


const Login = () => {
    const LoginValidation = Yup.object({
      email: Yup.string()
      .required('Required')
      .email('Email Format is Incorrect')
    })

    return (
        
        <div>
            <div className="singup">
            <h1>Log In</h1>


            {/* Start Form */}
            <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema = {LoginValidation}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
          <div className="span-2"><TextField label="Email" name="email" type="text"  /></div>
          <div className="span-2">
            <TextField label="Password" name="password" type="password" />
            </div>
            <div className=" span-2">
            <div className="Tilt  ">
                <button className="btn " type="submit">LOG IN</button>
                </div>
            </div>
            
          </Form>
        </div>
      )}
    </Formik>
        </div>
        </div>
    )
}

export default Login
