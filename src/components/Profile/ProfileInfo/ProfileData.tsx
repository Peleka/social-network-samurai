import {ProfileContactsType, ProfileType} from "../../../redux/profileReducer";
import React from "react";
import {Contacts} from "./ProfileInfo";

type ProfileDataPropsType = {
    profile: ProfileType
    isOwner: boolean
    goToEditMode: () => void
}

export const ProfileData:React.FC<ProfileDataPropsType> = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Edit</button></div>}
        <div><b>FullName:</b> {profile.fullName}</div>
        <div><b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}</div>
        {profile.lookingForAJob && <div>My professional skills: {profile.lookingForAJobDescription}</div>}
        <div><b>About me:</b> {profile.aboutMe}</div>
        <div><b>Contacts:</b> {Object.keys(profile.contacts)
            .map(key => {
                return <Contacts
                    key={key}
                    contactTitle={key}
                    contactValue={profile.contacts[key as keyof ProfileContactsType]}
                />
            })
        }
        </div>
    </div>
}