
export type PostsType = {
    id?: number
    message: string
    likesCount: number
}

type DialogsType = {
    id: number
    name: string
}

type MessageType={
    id: number
    message: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
}

export type DialogsPageType = {
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
        posts: [
            {id: 1, message: "My post 1", likesCount: 15},
            {id: 2, message: "My post 2", likesCount: 30},
            {id: 3, message: "Post 3", likesCount: 2},
            {id: 4, message: "My post 4", likesCount: 32},
        ]
    },

    dialogsPage: {
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
//
// let addPost = (postMessage: string ) => {
//     let newPost = {
//         id: 5,
//         message: postMessage,
//         likeCount: 60
//     }
//     state.profilePage.posts.push(newPost)
//
// }
