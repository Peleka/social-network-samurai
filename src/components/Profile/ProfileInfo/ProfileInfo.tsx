import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg'

type ProfileInfoPropsType = {
    profile: null | ProfileType //пофиксить тут boolean?
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any

}

const ProfileInfo:React.FC<ProfileInfoPropsType> = ({profile,status,updateStatus, isOwner,savePhoto}) => {
    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e: any) => {
        if(e.target.files.length) {
            savePhoto(e.target.files[0])
        }

    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || userPhoto} alt={'avatarka'}/>
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}
                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;