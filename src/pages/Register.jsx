import React,{ useState} from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as Yup from 'yup'
import axios from 'axios'
import { useHistory } from "react-router-dom";





const Register = () => {
  const history = useHistory()
  const [errorHandler, setErrorHandler] = useState(null)


    const validation = Yup.object({
      firstname : Yup.string()
      .required('Required')
      .max(15, 'Please Enter Less Than 15 Character In Your First Name'),
      lastname : Yup.string()
      .required('Required')
      .max(20, 'Please Enter Less Than 20 Character In Your Last Name'),
      email : Yup.string()
      .required('Required')
      .email('Email Format is Incorrect'),
      password : Yup.string()
      .required('Required')
      .min(8, 'Password Must Contain At Least 8 Characters,')
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        " One Uppercase, One Number And One Special Case Character"
      ),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null],'Password Must Match')
      .required('Required')
  })
    return (
        <div className="singup">
            <h1>Sing up</h1>


            {/* Start Form */}
            <Formik
      initialValues={{
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema ={validation}
      onSubmit={ async(values) => {
        await axios.post('http://localhost/Api-php/api/createUser.php',values)
        .then(res =>{
          if(res.data.status > 300) 
          return(
            setErrorHandler(res.data.message)
            )
            
          else{
            history.push("/");
        }
        })
        
      }}
    >
      {formik => (
        <div>
          {errorHandler && <div className="alert"> {errorHandler}</div>}
          <Form>
            <TextField label="First Name" name="firstname" type="text" />
            <TextField label="Last Name" name="lastname" type="text" />
            <TextField label="Password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <div className="span-2"><TextField label="Email" name="email" type="text"  /></div>
            <div className="tt span-2">
              <div className="Tilt  "  >
                <button className="btn " type="submit">SUBMIT</button>
              </div>
            </div>
            
          </Form>
        </div>
      )}
    </Formik>
        </div>
    )
}

export default Register
