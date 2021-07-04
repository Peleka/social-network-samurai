import React from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DilogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";


export const Dialogs = (props: DialogsPropsType) => {

    let dialogsElement = props.dialogsPage.dialogs
        .map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let messagesElement = props.dialogsPage.messages
        .map(m => <MessagesItem id={m.id}
                                message={m.message}
        />)

    const addNewMessage = (newMessage: FormDataType) => {
        props.sendMessageClick(newMessage.newMessageBody)
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage}/>

        </div>
    )
}

type FormDataType = {
    newMessageBody: string
}

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message"/>
            </div>
            <button>Add message</button>
        </form>)
}

//оборачиваем с пом нос reduxForm
const AddMessageFormRedux = reduxForm<FormDataType>({
    // a unique name for the form
    form: 'dialogAddMessageForm'
})(AddMessageForm)