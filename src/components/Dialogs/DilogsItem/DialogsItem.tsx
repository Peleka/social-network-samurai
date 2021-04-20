import React from "react";
import {NavLink} from "react-router-dom";
import classes from '../Dialogs.module.css';

type DialogsItemType = {
    name: string
    id: number
}

const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}
export default DialogItem;