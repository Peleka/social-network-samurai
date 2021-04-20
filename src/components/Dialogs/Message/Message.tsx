import React from "react";
import classes from '../Dialogs.module.css';


type MessagesItemType = {
    id: number
    message: string
}

const MessagesItem = (props: MessagesItemType) => {
    return (
        <div className={classes.message}>
            {props.message}
        </div>
    )
}

export default MessagesItem;