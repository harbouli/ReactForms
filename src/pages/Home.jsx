import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { MyContext } from '../context/MyContext'


export const Home = () => {
    const {rootState,logoutUser} =useContext(MyContext)
    const {isAuth,theUser} = rootState;
    if(isAuth){
        return(
            <>
        <h1>FirstName: {theUser.firstname && <span>{theUser.firstname}</span>}</h1>
        <h1>LastName: {theUser.lastname && <span>{theUser.lastname}</span>}</h1>
        <h1>Email: {theUser.email &&<span>{theUser.email}</span> }</h1>
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
