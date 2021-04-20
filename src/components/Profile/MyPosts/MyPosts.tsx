import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<PostsType>
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElement = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()
    let addPost = () => {
        alert(newPostElement.current?.value)
    }
    return (
        <div>
            <h3>my posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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