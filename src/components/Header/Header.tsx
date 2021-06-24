import React from "react";
import { NavLink } from "react-router-dom";
import classes from './Header.module.css';

type HeaderPropsType = {

}

const Header = (props: any) => {
    return (
        <header className={classes.header}>
            <img src='' />
            <div className={classes.loginBlock}>
                { props.isAuth ? props.login : <NavLink to={'/login'}> Login </NavLink> }
            </div>
        </header>
    )
}

export default Header;