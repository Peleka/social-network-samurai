import {ActionsTypes, DialogsPageType, MessageType} from "./store";

const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"

let initialState: DialogsPageType = {
    newChangeMessage: '',
    dialogs: [
        {name: "Dimuch", id: 1},
        {name: "Andrey", id: 2},
        {name: "Artem", id: 3}
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Good'}
    ]
}

export const dialogsReducer = (state = initialState, action: ActionsTypes): DialogsPageType => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage: MessageType = {
                id: 7,
                message: state.newChangeMessage
            }
            state.messages.push(newMessage)
            state.newChangeMessage = ''
            return state
        case CHANGE_NEW_MESSAGE:
            state.newChangeMessage = action.message
            return state;
        default:
            return state
    }
}

export const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}
export const updateNewMessageBodyAC = (message: string) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        message: message
    } as const
}