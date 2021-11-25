import React,{useState} from 'react'
import '../css/Register.css'
import { Formik, Form } from 'formik'
import { TextField } from '../components/TextField'
import * as Yup from 'yup'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import { useContext } from 'react'
import { MyContext } from '../context/MyContext'



const Login = () => {
  const {isLoggedIn} =useContext(MyContext)
      const history = useHistory()
      const [errorHandler, setErrorHandler] = useState(null)
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
      onSubmit={(values) => {
        axios.post('http://localhost/Api-php/api/login.php',values)
        .then(res =>{
          if(res.data.status > 399) 
          return(
            
            setErrorHandler(res.data.message)
            )
            
          else{
            if(res.data.token){

              localStorage.setItem('token',res.data.token)
               isLoggedIn()
              history.push("/");
            }
        }
        })
        
      }}
    >
      {formik => (
        <div>
          {errorHandler && <div className="alert">{errorHandler}</div>}
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
