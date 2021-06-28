import {ActionsTypes, AppDispatch} from "./redux-store"
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"

export type PostsType = {
    id?: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    userId: number
    photos: ProfilePhotosType
}
type ProfileContactsType = {
    facebook: string
    website: boolean
    vk: string
    twitter: string
    instagram: string
    youtube: boolean
    github: string
    mainLink: boolean
}
type ProfilePhotosType = {
    small: string
    large: string
}

let initialState = {
    messageForNewPost: "" as string,
    posts: [
        {id: 1, message: "My post 1", likesCount: 15},
        {id: 2, message: "My post 2", likesCount: 30}
    ] as Array<PostsType>,
    profile: null as null | ProfileType,
    status: "" as string
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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
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

export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
//уже не сэтаем
export const getUsersProfileThunkCreator = (userId: string) => (dispatch: AppDispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const getStatusThunkCreator = (userId: string) => (dispatch: AppDispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateStatusThunkCreator = (status: string) => (dispatch: AppDispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
}