import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatusWithHooks from "../../ProfileStatus/ProfileStatusWithHooks";

type ProfileInfoPropsType = {
    profile: null | ProfileType //пофиксить тут boolean?
    status: string
    updateStatus: (status: string) => void

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <img className='background'*/}
            {/*         src='https://www.awakenthegreatnesswithin.com/wp-content/uploads/2018/08/Nature-Quotes-1.jpg'/>*/}
            {/*</div>*/}

            <div>
                <img src={props.profile.photos.large} alt={'avatarka'}/>
                <ProfileStatusWithHooks
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;