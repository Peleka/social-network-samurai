import React, {ChangeEvent} from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {PostsType} from "../../../redux/store";

type MyPostsPropsType = {
    messageForNewPost: string
    posts: Array<PostsType>
    updateNewPostText: (text: string) => void
    addPost: () => void
}

const MyPosts = (props: MyPostsPropsType) => {
    let postsElement = props.posts.map(p => <Post key={p.id}
                                                  message={p.message}
                                                  likesCount={p.likesCount}/>
    )

    let addPost = () => {
        props.addPost()
    }

    let onChangeNewTextHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.updateNewPostText(text)
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