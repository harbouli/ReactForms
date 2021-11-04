import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div className="holder">
             <div className="Tilt  " >
                <Link to="/Singup"> Sign Up</Link>
            </div>
            <div className="Tilt  " >
                
                <Link to="/Login">Log In</Link>
            </div>
        </div>
    )
}
