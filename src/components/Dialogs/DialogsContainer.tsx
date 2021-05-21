import {addMessageAC, DialogsType, MessageType, updateNewMessageBodyAC} from "../../redux/dialogsReducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type DialogsPageType = {
    newChangeMessage: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

type MapStateToPropsType = {
    dialogsPage: DialogsPageType
}
type MapDispatchToPropsType = {
    sendMessageClick: () => void
    newMessageChange: (body: any) => void
}

export type DialogsPropsType = MapStateToPropsType & MapDispatchToPropsType


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch) : MapDispatchToPropsType => {
    return {
        sendMessageClick: () => {dispatch(addMessageAC())},
        newMessageChange: (body: any) => {dispatch(updateNewMessageBodyAC(body))}

    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;