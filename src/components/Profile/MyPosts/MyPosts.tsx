import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";
import {MyPostPropsType} from "./MyPostsContainer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validator";


const MyPosts = (props: MyPostPropsType) => {
    let postsElement = props.posts.map(p =>
        <Post key={p.id}
              message={p.message}
              likesCount={p.likesCount}/>
    )

    const addNewPost = (value: FormDataType) => {
        props.addPost(value.messageForNewPost)
    }

    return (
        <div>
            <h3>my posts</h3>
            <div>
                <ProfileFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={classes.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;

type FormDataType = {
    messageForNewPost: string
}

const maxLength10 = maxLengthCreator(10)

const ProfileForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       name="messageForNewPost"
                       placeholder="Enter your post"
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}

const ProfileFormRedux = reduxForm<FormDataType>({
    form: 'profileForm'
})(ProfileForm)