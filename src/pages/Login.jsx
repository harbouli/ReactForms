import React from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import Tilt from 'react-tilt'
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
            <div className=" span-2">
            <Tilt className="Tilt  " options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <button className="btn " type="submit">LOG IN</button>
                </Tilt>
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
