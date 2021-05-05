import {MessageType} from "./state";


const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"

function dialogsReducer(state: any, action: any) {
    if (action.type === ADD_MESSAGE) {
        let newMessage: MessageType = {
            id: 7,
            message: state.newChangeMessage
        }
        state.messages.push(newMessage)
        state.newChangeMessage = ''
    } else if (action.type === CHANGE_NEW_MESSAGE) {
        state.newChangeMessage = action.message
    }
    return state
}

export default dialogsReducer;