import React from "react";
import classes from './Sidebar.module.css'


type FriendsType = {
    id?: number
    name: string
    ava: string
}
export const Sidebar = (props: FriendsType) => {
    return (
        <div className={classes.Friends}>
            <img className={classes.avatar} src={props.ava} />
            <p>{props.name}</p>
        </div>
    )
}