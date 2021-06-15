import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";

type ProfileInfoPropsType = {
    profile: null | ProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if(!props.profile) {
       return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className='background'
                     src='https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/08/Nature-Quotes-1.jpg'/>
            </div>
            <div>
                <img src={props.profile.photos.large}/>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;