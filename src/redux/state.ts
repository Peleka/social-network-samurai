export type StoreType = {
    _state: RootStateType
    changeNewText: (newText: string) => void
    // addPost: () => void
    addMessage: () => void
    changeNewMessage: (message: string) => void
    subscribe: (observer: () => void) => void
    _onChange: () => void
    getState: () => RootStateType
    dispatch:(action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | ChangeNewPostActionType

type AddPostActionType = {
    type: "ADD-POST"
}

type ChangeNewPostActionType = {
    type: "CHANGE_NEW_TEXT"
    newText: string
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
    getState(){
        return this._state
    },

    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._onChange()
    },
    // addPost() {
    //
    // },
    addMessage() {
        let newMessage: MessageType = {
            id: 7,
            message: this._state.dialogsPage.newChangeMessage
        }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newChangeMessage = ''
        this._onChange()
    },
    changeNewMessage(message: string) {
        this._state.dialogsPage.newChangeMessage = message
        this._onChange()
    },
    dispatch(action) {
        if(action.type === "ADD-POST") {
            let newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 60
            };
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.messageForNewPost = ''
            this._onChange()
        } else if(action.type === "CHANGE_NEW_TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
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
