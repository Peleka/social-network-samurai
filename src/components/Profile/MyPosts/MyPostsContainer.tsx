import React from "react";
import {addPostAC, changeNewPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {StoryType} from "../../../redux/redux-store";

type MyPostsContainerPropsType = {
    store: StoryType
}

const MyPostsContainer = (props: MyPostsContainerPropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostAC(state.profilePage.messageForNewPost))
        // props.dispatch(addPostAC(props.messageForNewPost))
    }

    let updateNewPostText = (text: string) => {
        props.store.dispatch(changeNewPostAC(text))
    };

    return (<MyPosts
        updateNewPostText = {updateNewPostText}
        addPost={addPost}
        messageForNewPost={state.profilePage.messageForNewPost}
        posts={state.profilePage.posts}
    />)
}

export default MyPostsContainer;