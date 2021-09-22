import React from "react";
import {InjectedFormProps, reduxForm} from "redux-form";
import {required} from "../../utils/validator";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {connect} from "react-redux";
import {login} from "../../redux/authReducer";
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";
import classes from './../common/FormsControls/FormsControls.module.css'

type LoginPropsType = {
    captchaUrl: string | null
}
type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: any
}

const LoginForm: React.FC<InjectedFormProps<FormDataType, LoginPropsType> & LoginPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField('Email', 'email', [required], Input)}
            {createField('Password', 'password', [required], Input, {type: "password"})}
            {createField(null, 'rememberMe', [], Input, {type: "checkbox"}, "remember Me")}

            {captchaUrl && <img src={captchaUrl} alt={"captcha"}/>}
            { captchaUrl &&  createField("Symbols from image", "captcha", [required], Input, {type: "text"}, ) }

            {error && <div className={classes.formCommonError}>{error}</div>}

            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

//оборачиваем с пом hос reduxForm
const LoginReduxForm = reduxForm<FormDataType, LoginPropsType>({
    form: 'login'   // a unique name for the form
})(LoginForm)


const Login = (props: any) => {
    const onSubmit = (formData: FormDataType) => {
        //тут из пропсов connect нам достает ф-цию login, которая внутри себя диспатчит вызов loginTC
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
    }
    if (props.isAuth) return <Redirect to={"/profile"}/>

    return (
        <div>
            <h1>Login</h1>

            <LoginReduxForm onSubmit={onSubmit}
                            captchaUrl={props.captchaUrl}/>
        </div>
    )
}

type MapStateToPropsType = {
    captchaUrl: string | null
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        captchaUrl: state.auth.captchaUrl,
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)