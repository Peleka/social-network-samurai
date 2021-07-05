import React from "react";
import {InjectedFormProps, reduxForm, Field} from "redux-form";
import { required } from "../../utils/validator";
import { Input } from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"Email"}
                       component={Input}
                       name={"email"}
                       validate={[required]}
                />
            </div>
            <div>
                <Field placeholder={"Password"}
                       type={"password"}
                       component={Input}
                       name={"password"}
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
//@ts-ignore
const Login = (props) => {
    const onSubmit = (formData: FormDataType) => {
        //тут из пропсов connect нам достает ф-цию login, которая внутри себя диспатчит вызов loginTC
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
     return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)