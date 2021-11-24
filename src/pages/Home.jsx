import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'


export const Home = () => {
    const {rootState,logoutUser} =useContext(MyContext)
    const {isAuth,theUser,showLogin} = rootState;
    if(isAuth){
        return(
        <div className="holder">
             <div className="Tilt  " >
                <Link onClick={logoutUser} to="/"> Log Out</Link>
            </div>
        </div>
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
