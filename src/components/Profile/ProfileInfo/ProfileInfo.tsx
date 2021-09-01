import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: null | ProfileType //пофиксить тут boolean?
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo:React.FC<ProfileInfoPropsType> = ({profile,status,updateStatus}) => {
    if (!profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={profile.photos.large} alt={'avatarka'}/>
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;