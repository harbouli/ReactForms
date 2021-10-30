import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
export const Home = () => {
    return (
        <div className="holder">
            <Link to="/Singup"> Sign Up</Link>
            <Link to="/Login">Log In</Link>
        </div>
    )
}
