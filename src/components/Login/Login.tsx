import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import { required } from "../../utils/validator";
import { Input } from "../common/FormsControls/FormsControls";

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
                <Field placeholder={"Login"}
                       component={Input}
                       name={"Login"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       component={Input}
                       name={"Password"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field type={'checkbox'}
                       component={Input}
                       name={"rememberMe"}
                />
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