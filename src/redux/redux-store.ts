import {combineReducers, createStore} from "redux";
import {addPostAC, changeNewPostAC, profileReducer, setUserProfile} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
    unfollow,
    usersReducer
} from "./usersReducer";
import {authReducer, setAuthUserData} from "./authReducer";

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof follow> | ReturnType<typeof unfollow>
    | ReturnType<typeof setUsers> | ReturnType<typeof setCurrentPage> | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setIsFetching> | ReturnType<typeof setUserProfile> | ReturnType<typeof setAuthUserData>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer,
    auth: authReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoryType = typeof store


export let store = createStore(rootReducer)

//rootReducer возвращает нам тип всего приложения