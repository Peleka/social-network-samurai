import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, deletePostAC, profileReducer, savePhotoSuccess, setStatus, setUserProfile} from "./profileReducer";
import {addMessageAC, dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    follow, toggleFollowingInProgress,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    usersReducer
} from "./usersReducer";
import {authReducer, getCaptchaUrlSuccess, setAuthUserData} from "./authReducer";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {initializedSuccessAC, appReducer} from "./appReducer";

export type AppActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof addMessageAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress> | ReturnType<typeof setStatus>
    | ReturnType<typeof initializedSuccessAC> | ReturnType<typeof deletePostAC> | ReturnType<typeof savePhotoSuccess>
    | ReturnType<typeof getCaptchaUrlSuccess>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer, //обязательно д.б. названо form
    app: appReducer
})

export type AppThunkType<ReturnType = Promise<void>> = ThunkAction<ReturnType, AppStateType, unknown, AppActionsTypes>

export type AppStateType = ReturnType<typeof rootReducer>
//rootReducer возвращает нам тип всего приложения

export type StoryType = typeof store

export type AppDispatch = typeof store.dispatch;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//@ts-ignore
window.store = store