import React from "react";
import classes from './Sidebar.module.css'
import {FriendsType} from "../../redux/state";

export const Sidebar = (props: FriendsType) => {
    return (
        <div className={classes.Friends}>
            <img className={classes.avatar} src={props.ava} />
            <p>{props.name}</p>
        </div>
    )
}