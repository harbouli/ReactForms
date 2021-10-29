import React from 'react'
import '../css/textField.css'
//  TextFieldComponent
export const TextField = ({label, ...props}) => {

    return (
        <div className="textFieldCss">
            <input 
            
            type={props.type}
            name={props.name}
            autoComplete="none"
            required
             />
            <label htmlFor={props.name}>
                <span className="content-name">{label}</span>
            </label>
        </div>
    )
}
