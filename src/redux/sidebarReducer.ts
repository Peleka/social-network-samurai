import {ActionsTypes, SidebarType} from "./store";

let initialState: SidebarType = {
    friends: [
        {id: 1, name: "Dimuch", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
        {id: 2, name: "Andrey", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
        {id: 3, name: "Artem", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
    ]
}

export const sidebarReducer = (state = initialState, action: ActionsTypes): SidebarType => {
    return state
}