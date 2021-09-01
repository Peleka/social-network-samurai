import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validator";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import classes from './../common/FormsControls/FormsControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}
const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: "password"})}
            {createField(null, 'rememberMe', [], Input, {type: "checkbox"}, "remember Me")}

            {error && <div className={classes.formCommonError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

//оборачиваем с пом hос reduxForm
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
    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state: AppStateType) => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)