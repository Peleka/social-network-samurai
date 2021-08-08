import {addPostAC, deletePostAC, profileReducer} from "./profileReducer";

it('length  of post should be incremented', () => {
    let action = addPostAC("it-kamasutra")
    let state = {
        posts: [
            {id: 1, message: "My post 1", likesCount: 15},
            {id: 2, message: "My post 2", likesCount: 30}
        ]
    }
//@ts-ignore
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(3)
})

it('after deleting length  of messages should be decrement', () => {
    let action = deletePostAC(1)
    let state = {
        posts: [
            {id: 1, message: "My post 1", likesCount: 15},
            {id: 2, message: "My post 2", likesCount: 30}
        ]
    }
//@ts-ignore
    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})
