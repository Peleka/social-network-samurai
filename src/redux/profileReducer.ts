import {AppActionsTypes, AppDispatch, AppStateType} from "./redux-store"
import {profileAPI, usersAPI} from "../api/api";
import {ProfileFormDataType} from "../components/Profile/ProfileInfo/ProfileDataForm";
import {stopSubmit} from "redux-form";

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
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: ProfileContactsType
    photos: ProfilePhotosType
}
export type ProfileContactsType = {
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

export const profileReducer = (state: InitialStateType = initialState, action: AppActionsTypes): InitialStateType => {
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

//?????? ???? ????????????
export const getUsersProfileThunkCreator = (userId: string) => async (dispatch: AppDispatch) => {
    let response = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}

export const getStatusThunkCreator = (userId: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatusThunkCreator = (status: string) => async (dispatch: AppDispatch) => {
    try {
        let response = await profileAPI.updateStatus(status)
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    } catch (e) {
        //dispatch ????????????, ?????????? ????????????, ???????????????? ??????-????
    }
    
}
export const savePhoto = (photoFile: string) => async (dispatch: AppDispatch) => {
    let response = await profileAPI.savePhoto(photoFile)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (formData: ProfileFormDataType) => async (dispatch: AppDispatch, getState: () => AppStateType) => {
    const userId = getState().auth.id
    const response = await profileAPI.saveProfile(formData)
    if (response.data.resultCode === 0) {
        //@ts-ignore
            dispatch(getUsersProfileThunkCreator(userId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        //@ts-ignore
        dispatch(stopSubmit('edit_profile', {_error: message}))
        return Promise.reject(response.data.messages[0])
    }
}