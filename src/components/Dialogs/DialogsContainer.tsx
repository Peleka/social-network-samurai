import React, {ChangeEvent} from "react";
import classes from './Dialogs.module.css';
import DialogItem from "./DilogsItem/DialogsItem";
import MessagesItem from "./Message/Message";
import {ActionsTypes, DialogsPageType} from "../../redux/store";
import {addMessageAC, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {StoryType} from "../../redux/redux-store";


type DialogsPageContainerPropsType = {
    store: StoryType
}

const DialogsContainer = (props: DialogsPageContainerPropsType) => {
    let state = props.store.getState()

    let sendMessageClick = () => {
        props.store.dispatch(addMessageAC(state.dialogsPage.newChangeMessage))
    }

    let newMessageChange = (body: any) =>
        props.store.dispatch(updateNewMessageBodyAC(body))

    return (
        <Dialogs
            sendMessageClick={sendMessageClick}
            newMessageChange={newMessageChange}
            dialogsPage={state.dialogsPage}
        />
    )
}

export default DialogsContainer;