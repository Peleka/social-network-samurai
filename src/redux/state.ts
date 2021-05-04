const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const ADD_MESSAGE = "ADD_MESSAGE"
const CHANGE_NEW_MESSAGE = "CHANGE_NEW_MESSAGE"


export type StoreType = {
    _state: RootStateType
    _addMessage: () => void
    _onChange: () => void

    subscribe: (observer: () => void) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}
// type AddPostActionType = ReturnType<typeof addPostAC>
// type ChangeNewPostActionType = ReturnType<typeof changeNewPostAC>
export type ActionsTypes = ReturnType<typeof addPostAC> | ReturnType<typeof changeNewPostAC> | ReturnType<typeof addMessageAC> | ReturnType<typeof changeNewMessageAC>
// type AddPostActionType = {
//     type: "ADD-POST"
//     postText: string
// }

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}
export const changeNewPostAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}
export const addMessageAC = (messageText: string) => {
    return {
        type: ADD_MESSAGE,
        messageText: messageText
    } as const
}
export const changeNewMessageAC = (message: string) => {
    return {
        type: CHANGE_NEW_MESSAGE,
        message: message
    } as const
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
    },                                //можно делать так
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 60
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._onChange()
        } else if (action.type === CHANGE_NEW_TEXT) {
            this._state.profilePage.messageForNewPost = action.newText
            this._onChange()
        } else if (action.type === ADD_MESSAGE) {
            this._addMessage()                         //можно делать так
        } else if(action.type === CHANGE_NEW_MESSAGE) {
            this._state.dialogsPage.newChangeMessage = action.message
            this._onChange()
        }
    }
}

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}
type DialogsType = {
    id: number
    name: string
}
type MessageType = {
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
