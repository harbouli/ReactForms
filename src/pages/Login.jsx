import React from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as yup from 'yup'
const Login = () => {
    

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
 
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <Form>
          <div className="span-2">
            <TextField label="Password" name="password" type="password" />
            </div>
            <div className="span-2"><TextField label="Email" name="email" type="text"  /></div>
            <div className="tt span-2">
                <button className="btn " type="submit">LOG IN</button>
                
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
