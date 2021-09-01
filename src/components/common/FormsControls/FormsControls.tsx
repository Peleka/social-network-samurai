import React from 'react'
import classes from './FormsControls.module.css'
import {Field} from "redux-form";

//@ts-ignore
export const Textarea = ({input, meta: {touched, error}, ...props}) => {
    const hasError = touched && error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}
//@ts-ignore
export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
//@ts-ignore
export const createField = (placeholder, name, validate, component, props?, text?) => (
    <div>
        <Field
            placeholder={placeholder}
            component={component}
            name={name}
            validate={validate}
            {...props}
        />{text}
    </div>
)