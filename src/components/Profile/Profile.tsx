import React from "react";
import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: ProfilePageType
    addPostCallback: () => void
    changeNewText:  (newText: string) => void
}

const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPostCallback}
                     messageForNewPost={props.profilePage.messageForNewPost}
                     changeNewTextCallback={props.changeNewText}
            />
        </div>
    )
}

export default Profile;