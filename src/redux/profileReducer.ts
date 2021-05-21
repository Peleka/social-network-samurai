import { ActionsTypes } from "./redux-store"


const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}

let initialState = {
    messageForNewPost: "" as string,
    posts: [
        {id: 1, message: "My post 1", likesCount: 15},
        {id: 2, message: "My post 2", likesCount: 30},
        // {id: 3, message: "Post 3", likesCount: 2},
        // {id: 4, message: "My post 4", likesCount: 32},
    ] as Array<PostsType>
}

export type InitialStateType = typeof initialState

export const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: PostsType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 60
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                messageForNewPost: ''
            }
        }
        case CHANGE_NEW_TEXT: {
            return {
                ...state,
                messageForNewPost: action.newText
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => {
    return {
        type: ADD_POST
    } as const
}
export const changeNewPostAC = (newText: string) => {
    return {
        type: CHANGE_NEW_TEXT,
        newText: newText
    } as const
}