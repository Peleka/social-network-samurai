import React from "react";
import {Preloader} from "../../common/Preloader/Preloader";
import {ProfileType} from "../../../redux/profileReducer";
import ProfileStatus from "../../ProfileStatus/ProfileStatus";

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
                <ProfileStatus
                    status={props.status}
                    updateStatus={props.updateStatus}
                />
            </div>
        </div>
    )
}

export default ProfileInfo;