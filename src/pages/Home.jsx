import React from 'react'
import '../css/Home.css'
import { Link } from 'react-router-dom'
import Tilt from 'react-tilt'
export const Home = () => {
    return (
        <div className="holder">
             <Tilt className="Tilt  " options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                <Link to="/Singup"> Sign Up</Link>
            </Tilt>
            <Tilt className="Tilt  " options={{ max : 25 }} style={{ height: 250, width: 250 }} >
                
                <Link to="/Login">Log In</Link>
            </Tilt>
        </div>
    )
}
