import React from "react";

export const Login = () => {
    return (
        <div>
            <div>Login</div>
            <LoginForm/>
        </div>
    )
}

const LoginForm = () => {
    return (
        <form>
            <div>
                <input/>Login
            </div>
            <div>
                <input/>password
            </div>
            <div>
                <input type={'checkbox'}/> Remember Me
            </div>
            <div>
                <button>Login</button>
            </div>

        </form>
    )
}