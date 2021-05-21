import { ActionsTypes } from "./redux-store"

type FriendsType = {
    id?: number
    name: string
    ava: string
}

let initialState = {
    friends: [
        {id: 1, name: "Dimuch", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
        {id: 2, name: "Andrey", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
        {id: 3, name: "Artem", ava: 'https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg'},
    ] as Array<FriendsType>
}

type InitialStatePropsType = typeof initialState

export const sidebarReducer = (state: InitialStatePropsType = initialState, action: ActionsTypes): InitialStatePropsType => {
    return state
}