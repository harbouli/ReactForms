import React from 'react'
import '../css/Register.css'
const Register = () => {
    return (
        <div className="singup">
            <h1>Sing up</h1>
            <form className="form">
                <div className="firstname">
                    <labe>
                        Firstname:
                    </labe>
                    <input type="text" name="Firstname" className="form-input"/>
                </div>
                <div className="lastname">
                    <labe>
                        Lastname:
                    </labe>
                    <input type="text" name="Firstname" className="form-input"/>
                    </div>
            </form>
        </div>
    )
}

export default Register
