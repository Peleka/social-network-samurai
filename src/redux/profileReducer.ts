import {ActionsTypes, PostsType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"

let initialState: ProfilePageType = {
    messageForNewPost: "",
    posts: [
        {id: 1, message: "My post 1", likesCount: 15},
        // {id: 2, message: "My post 2", likesCount: 30},
        // {id: 3, message: "Post 3", likesCount: 2},
        // {id: 4, message: "My post 4", likesCount: 32},
    ]
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 60
            };
            state.posts.push(newPost)
            state.messageForNewPost = ''
            return state;
        case CHANGE_NEW_TEXT:
            state.messageForNewPost = action.newText
            return state;
        default:
            return state
    }
}

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