import {applyMiddleware, combineReducers, createStore} from "redux";
import {addPostAC, changeNewPostAC, profileReducer, setUserProfile} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateNewMessageBodyAC} from "./dialogsReducer";
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
import {authReducer, setAuthUserData} from "./authReducer";
import thunkMiddleware from "redux-thunk";

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingInProgress>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoryType = typeof store

export type AppDispatch = typeof store.dispatch;

export let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

//rootReducer возвращает нам тип всего приложения