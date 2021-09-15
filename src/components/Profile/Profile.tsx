import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profileReducer";

type ProfilePropsType = {
    profile: null | ProfileType
    status: string
    updateStatus: any
    isOwner: boolean
    savePhoto: any
}

const Profile: React.FC<ProfilePropsType> = ({profile, status, updateStatus, isOwner, savePhoto}) => {
    return (
        <div>
            <ProfileInfo
                isOwner={isOwner}
                profile={profile}
                status={status}
                updateStatus={updateStatus}
                savePhoto={savePhoto}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;