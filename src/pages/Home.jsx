import React from 'react'
import '../css/Home.css'
import { Link,useHistory } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'
import axios from 'axios'

export const Home = () => {
    const {rootState,logoutUser} =useContext(MyContext)
    const {isAuth} = rootState;
    const data = {
        firstName: "",
        lastName: "",
        email: ""
    }
    const [info, setInfo] = useState(data)
    if(isAuth){
        axios.get('http://localhost/Api-php/api/decoder.php')
        .then((response) =>{
        setInfo({
            firstName:response.data.firstname,
            lastName:response.data.lastname,
            email:response.data.email}
            )
        })
        return(
            <>
            <h1>{info.firstName}</h1>
            <h1>{info.lastName}</h1>
            <h1>{info.email}</h1>
        <div className="holder">
             <div className="Tilt  " >
                <Link onClick={logoutUser} to="/"> Log Out</Link>
            </div>
        </div>
        </>
        )
    }else{
    return (
        <div className="holder">
             <div className="Tilt  " >
                 
                <Link to="/Singup"> Sign Up</Link>
            </div>
            <div className="Tilt  " >
                
                <Link to="/Login">Log In</Link>
            </div>
        </div>
    )}
}
