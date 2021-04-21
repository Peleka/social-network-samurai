import {rerenderEntireTree} from '../render';

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

export const state: RootStateType = {
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
}

export let addPost = () => {
    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.messageForNewPost,
        likesCount: 60
    };
    state.profilePage.posts.push(newPost)
    state.profilePage.messageForNewPost = ''
    rerenderEntireTree(state)
}

export let changeNewText = (newText: string) => {
    state.profilePage.messageForNewPost = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {
    let newMessage: MessageType = {
        id: 7,
        message: state.dialogsPage.newChangeMessage
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newChangeMessage = ''
    rerenderEntireTree(state)
}

export let changeNewMessage = (message: string) => {
    state.dialogsPage.newChangeMessage = message
    rerenderEntireTree(state)
}
