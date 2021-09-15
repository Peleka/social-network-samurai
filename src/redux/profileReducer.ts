import {ActionsTypes, AppDispatch} from "./redux-store"
import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST"
const DELETE_POST = "DELETE_POST"
const SET_USER_PROFILE = "SET_USER_PROFILE"
const SET_STATUS = "SET_STATUS"
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS"

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
                message: action.messageForNewPost,
                likesCount: 60
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId)
            }
        }
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                profile: {...state.profile, photos: action.photos} as ProfileType
            }
        }
        default:
            return state
    }
}

export const addPostAC = (messageForNewPost: string) => {
    return {type: ADD_POST, messageForNewPost} as const
}
export const deletePostAC = (postId: any) => ({type: DELETE_POST, postId} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)
export const setStatus = (status: string) => ({type: SET_STATUS, status} as const)
export const savePhotoSuccess = (photos: ProfilePhotosType) => ({type: SAVE_PHOTO_SUCCESS, photos} as const)

//уже не сэтаем
export const getUsersProfileThunkCreator = (userId: string) => async (dispatch: AppDispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatusThunkCreator = (userId: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (photoFile: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.savePhoto(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}