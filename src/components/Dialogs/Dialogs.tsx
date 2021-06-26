import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DilogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import { Redirect } from "react-router-dom";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id}  name={d.name} id={d.id}/>)

    let messagesElement = props.dialogsPage.messages
        .map(m => <MessagesItem id={m.id}
                                message={m.message}
        />)

    let onSendMessageClick = () => {
        props.sendMessageClick()
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.newMessageChange(body)
    }

    if (!props.isAuth) return <Redirect to={'/login'} />
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <div>
                <textarea value={props.dialogsPage.newChangeMessage}
                          onChange={onNewMessageChange}
                          placeholder="Enter your message"
                />
                <button onClick={onSendMessageClick}>Add message</button>
            </div>
        </div>
    )
}