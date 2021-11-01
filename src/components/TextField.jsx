import React from 'react'
import '../css/textField.css'
import { ErrorMessage, useField } from 'formik'

//  TextFieldComponent
export const TextField = ({label, ...props}) => {
    const [field, meta]= useField(props)

    return (
        
        <div className="textFieldCss">
              <ErrorMessage name={field.name} render={msg => <div className='Error-tooltip'>{msg}</div>} />
            <input 
            {...props}
            {...field}
            className={` ${meta.touched && meta.error && 'is-invalid'} h`}
            autoComplete="none"
            required
             />
            <label htmlFor={field.name}>
                <span className="content-name">{label}</span>
            </label>
        </div>
    )
}
