import React, {useState} from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";
import userPhoto from '../../../assets/images/user.jpg'
import {ProfileData} from "./ProfileData";
import {ProfileDataForm, ProfileFormDataType} from "./ProfileDataForm";

type ProfileInfoPropsType = {
    profile: null | ProfileType //пофиксить тут boolean?
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
    savePhoto: any
    saveProfile: any
}

const ProfileInfo: React.FC<ProfileInfoPropsType> = ({
                                                         profile,
                                                         status,
                                                         updateStatus,
                                                         isOwner,
                                                         savePhoto,
                                                         saveProfile
                                                     }) => {

    const [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader/>
    }

    const onSubmit = (formData: ProfileFormDataType) => {
        saveProfile(formData).then(() => {
            setEditMode(false)
        })
    }

    return (
        <div>
            <div>
                <img src={profile.photos.large || userPhoto} alt={'avatarka'}/>
                {/*{isOwner && <input type={'file'} onChange={onMainPhotoSelected}/>}*/}

                {editMode
                    ? <ProfileDataForm
                        onSubmit={onSubmit}
                        profile={profile}
                        savePhoto={savePhoto}
                        setEditProfile={setEditMode}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => setEditMode(true)}
                    />
                }

                <ProfileStatusWithHooks
                    status={status}
                    updateStatus={updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;

type ContactPropsType =
    {
        contactTitle: string
        contactValue: string | boolean
    }

export const Contacts: React.FC<ContactPropsType> = ({contactTitle, contactValue}) => {
    return <div>
        {contactTitle}: {contactValue}
    </div>
}