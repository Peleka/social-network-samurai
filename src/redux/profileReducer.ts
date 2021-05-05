import {PostsType} from "./state";

const ADD_POST = "ADD-POST"
const CHANGE_NEW_TEXT = "CHANGE_NEW_TEXT"

function profileReducer(state: any, action: any) {
    if (action.type === ADD_POST) {
        let newPost: PostsType = {
            id: 5,
            message: state.messageForNewPost,
            likesCount: 60
        };
        state.posts.push(newPost)
        state.messageForNewPost = ''
    } else if (action.type === CHANGE_NEW_TEXT) {
        state.messageForNewPost = action.newText
    }
    return state
}

export default profileReducer;