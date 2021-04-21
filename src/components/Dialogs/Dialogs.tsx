import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DilogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {changeNewText, DialogsPageType} from "../../redux/state";


type DialogsPagePropsType = {
    dialogsPage: DialogsPageType
    addMessage: () => void
    changeNewMessage:(message: string) => void
}

const Dialogs = (props:DialogsPagePropsType ) => {


    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem name={d.name} id={d.id}/>)

    let messagesElement = props.dialogsPage.messages
        .map(m => <MessagesItem id={m.id}
                                message={m.message}


        />)

    let addMessage = () => {
        props.addMessage()
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                { dialogsElement }
            </div>
            <div className={classes.messages}>
                { messagesElement }
            </div>
            <div>
                <textarea value={props.dialogsPage.newChangeMessage}  onChange={e => props.changeNewMessage(e.currentTarget.value)}></textarea>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;