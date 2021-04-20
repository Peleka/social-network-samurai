import React from "react";
import classes from './Navbar.module.css'
import { NavLink } from "react-router-dom";
import {SidebarType} from "../../redux/state";
import {Sidebar} from "../Sidebar/Sidebar";
import s from "../Sidebar/Sidebar.module.css";

type NavbarPropsType = {
    sidebar: SidebarType
}

const Navbar = (props: NavbarPropsType) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.active}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/dialogs"} activeClassName={classes.active}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.active}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"} activeClassName={classes.active}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"} activeClassName={classes.active}>Settings</NavLink>
            </div>
            <div className={classes.BestFriends}>{
                props.sidebar.friends.map(f => <Sidebar name={f.name} key={f.id} ava={f.ava}/>)
            }</div>
        </nav>
    )
}

export default Navbar;