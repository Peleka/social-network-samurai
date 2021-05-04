import React, {ChangeEvent, ChangeEventHandler} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, addPostAC, changeNewPostAC, PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    messageForNewPost: string
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id}
                                                  message={p.message}
                                                  likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch(addPostAC(props.messageForNewPost))
    }

    let onChangeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(changeNewPostAC(e.currentTarget.value))
    };

    return (
        <div>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
                              onChange={onChangeNewTextHandler}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;