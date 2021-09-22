import {AppActionsTypes} from "./redux-store";

const ADD_MESSAGE = "ADD_MESSAGE"

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
}

export type InitialStateType = typeof initialState


export const dialogsReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage: MessageType = {
                id: 7,
                message: action.newMessage
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default:
            return state
    }
}

export const addMessageAC = (newMessage: string) => {
    return {
        type: ADD_MESSAGE,
        newMessage
    } as const
}