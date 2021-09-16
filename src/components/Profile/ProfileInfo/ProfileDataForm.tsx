import React, {ChangeEvent} from "react";
import {reduxForm} from "redux-form";
import {ProfileType} from "../../../redux/profileReducer";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

export type ProfileFormDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

type ProfileDataFormPropsType = {
    profile: ProfileType
    savePhoto: (photo: File) => void
    setEditProfile: (editProfile: boolean) => void
}

export const ProfileDataForm = reduxForm<ProfileType, ProfileDataFormPropsType>(
    {form: 'edit_profile'})((
    {
        setEditProfile,
        error,
        savePhoto,
        handleSubmit,
        profile
    }
) => {

    const onMainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                <b>Change avatar:</b>
                <div>
                    <input type="file"
                           placeholder={'Change avatar'}
                           onChange={onMainPhotoSelected}/>
                </div>
            </label>

            <div>
                <span>About Me: </span>
                {createField('About Me', 'aboutMe', [], Input,)}
            </div>

            <div>
                <span>Full Name: </span>
                {createField('Full name', 'fullName', [], Input)}
            </div>

            <div>
                <span>My professional skills: </span>
                {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                <span>Looking For A Job: </span>
                {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>

            <div>
                <b>Contacts:</b>
                {Object.keys(profile.contacts).map((key) => {
                        return (
                            <div key={key}>
                                <b>{key} : {createField(key, 'contacts.' + key, [], Input)}</b>
                            </div>
                        )
                    }
                )}
            </div>

            <button style={{backgroundColor: 'green'}} type={'submit'}>Save</button>
            <button style={{backgroundColor: 'red'}} type={'button'}
                    onClick={() => setEditProfile(false)}> Cancel
            </button>

            {error && (
                <span style={{color: 'red'}}>
                {error}
            </span>
            )}
        </form>
    )
})