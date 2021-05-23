import {combineReducers, createStore} from "redux";
import {addPostAC, changeNewPostAC, profileReducer} from "./profileReducer";
import {addMessageAC, dialogsReducer, updateNewMessageBodyAC} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";
import {followAC, setUsers, unfollowAC, usersReducer} from "./usersReducer";

export type ActionsTypes = ReturnType<typeof addPostAC>
    | ReturnType<typeof changeNewPostAC>
    | ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof followAC> | ReturnType<typeof unfollowAC>
    | ReturnType<typeof setUsers>

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    users: usersReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoryType = typeof store

export let store = createStore(rootReducer)

//rootReducer возвращает нам тип всего приложения