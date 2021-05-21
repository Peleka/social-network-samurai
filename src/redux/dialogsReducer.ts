import {ActionsTypes} from "./redux-store";


const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"

export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

const initialState = {
    dialogs: [
        {name: "Dimuch", id: 1},
        {name: "Andrey", id: 2},
        {name: "Artem", id: 3}
    ] as Array<DialogsType>,

    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Fine'},
        {id: 4, message: 'Good'}
    ] as Array<MessageType>,
    newChangeMessage: ''
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 7,
                message: state.newChangeMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newChangeMessage: ''
            }
        }
        case CHANGE_NEW_MESSAGE: {
            return {
                ...state,
                newChangeMessage: action.message
            }
        }
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: ADD_MESSAGE
    } as const
}
export const updateNewMessageBodyAC = (message: string) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        message: message
    } as const
}