import {addPostAC, PostsType} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {AppStateType} from "../../../redux/redux-store";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type MapStateToPropsType = {
    posts: Array<PostsType>
}

type MapDispatchToPropsType = {
    addPost: (messageForNewPost: string) => void
}

export type MyPostPropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
          addPost: (messageForNewPost: string) => {
            dispatch(addPostAC(messageForNewPost))
        }
    }
}
let MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostContainer;