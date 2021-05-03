import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {ActionsTypes, PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    messageForNewPost: string
    posts: Array<PostsType>
    dispatch: (action: ActionsTypes) => void
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }
    return (
        <div>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea value={props.messageForNewPost}
                              onChange={e => props.dispatch({type: "CHANGE_NEW_TEXT", newText: e.currentTarget.value})}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={classes.posts}>
                { postsElement }
            </div>
        </div>
    )
}

export default MyPosts;