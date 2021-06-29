import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";

export const Login = () => {
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Login"} component={"input"} name={"Login"}/>
            </div>
            <div>
                <Field placeholder={"Password"} component={"input"} name={"Password"}/>
            </div>
            <div>
                <Field type={'checkbox'} component={"input"} name={"rememberMe"}/>
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}

//оборачиваем с пом нос reduxForm
const LoginReduxForm = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'login'
})(LoginForm)