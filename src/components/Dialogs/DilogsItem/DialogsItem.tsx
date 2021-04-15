import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Dialogs.module.css';

type DialogsItemType = {
    name: string
    id: number
}

type MessagesItemType = {
    id: number
    message: string
}

const DialogItem = (props: DialogsItemType) => {
    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to={'/dialog/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const MessagesItem = (props: MessagesItemType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {name: "Dimuch", id: 1},
        {name: "Andrey", id: 2},
        {name: "Artem", id: 3}
    ]

    let messages = [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Good'}
    ]

    let dialogsElement = dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElement = messages
        .map(m => <MessagesItem id={m.id} message={m.message}/>)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
        </div>
    )
}

export default Dialogs;