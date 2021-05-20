import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DilogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {DialogsPageType} from "../../redux/store";

type DialogsPagePropsType = {
    sendMessageClick: () => void
    newMessageChange: (value: any) => void
    dialogsPage: DialogsPageType
}

const Dialogs = (props: DialogsPagePropsType) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

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

export default Dialogs;