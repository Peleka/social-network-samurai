import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";
import {sidebarReducer} from "./sidebarReducer";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

export type StoryType = typeof store

export let store = createStore(rootReducer)

//rootReducer возвращает нам тип всего приложения