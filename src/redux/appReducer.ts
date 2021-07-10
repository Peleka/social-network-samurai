import {ActionsTypes, AppDispatch} from "./redux-store";
import {Dispatch} from "redux";
import {getAuthUserData} from "./authReducer";


const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'

let initialState = {
    initialized: false as boolean
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default: return state

    }
}

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS} as const)

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
//dispatch(smth)
//dispatch(smth)
    Promise.all([promise]).then(() => {
        dispatch(initializedSuccessAC())
    })
}