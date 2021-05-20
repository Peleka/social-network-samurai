import {addMessageAC, dialogsReducer, updateNewMessageBodyAC} from "./dialogsReducer";
import {profileReducer, addPostAC, changeNewPostAC} from "./profileReducer";
import {sidebarReducer} from "./sidebarReducer";

export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageBodyAC>

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    messageForNewPost: string
    posts: Array<PostsType>
}
export type DialogsPageType = {
    newChangeMessage: string
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}
export type FriendsType = {
    id?: number
    name: string
    ava: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}

type StoreType = {
    _state: RootStateType
    _addMessage: () => void
    _onChange: () => void
    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
export const store: StoreType = {
    _state: {
        profilePage: {
            messageForNewPost: "",
            posts: [
                {id: 1, message: "My post 1", likesCount: 15},
                // {id: 2, message: "My post 2", likesCount: 30},
                // {id: 3, message: "Post 3", likesCount: 2},
                // {id: 4, message: "My post 4", likesCount: 32},
            ]
        },
        dialogsPage: {
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
        },
        sidebar: {
            friends: [
                {id: 1, name: "Dimuch", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
                {id: 2, name: "Andrey", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
                {id: 3, name: "Artem", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
            ]
        }
    },
    _onChange() {
        console.log('state changed')
    },
    subscribe(observer: () => void) {
        this._onChange = observer
    },
    getState() {
        return this._state
    },
    _addMessage() {
        let newMessage: MessageType = {
            id: 7,
            message: this._state.dialogsPage.newChangeMessage
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newChangeMessage = ''
        this._onChange()
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChange() //уведомляем подписчиков
    }
}
