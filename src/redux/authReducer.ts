import {ActionsTypes, AppDispatch} from "./redux-store"
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    id: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    isFetching: false as boolean,
}

export type InitialStateType = typeof initialState

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA :
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state
    }
}

export const setAuthUserData = (id: number, email: string, login: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
} as const)

export const getAuthUserData = () => async (dispatch: Dispatch<ActionsTypes>) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserData(id, email, login, true))
    }
} //это ThunkCreator

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: AppDispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        //@ts-ignore
        dispatch(getAuthUserData())
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Error"
        //@ts-ignore
        dispatch(stopSubmit("login", {_error: message}))
    }
}

export const logOut = () => async (dispatch: Dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        //@ts-ignore
        dispatch(setAuthUserData(null, null, null, false))
    }
}

