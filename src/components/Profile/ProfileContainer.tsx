import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {ProfileType, setUserProfile} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter } from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile:null | ProfileType ) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType>{
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = "2"
        }
        axios
            .get(`https://social-network.samuraijs.com/api/1.0//profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
})

let withUrlDataContainerComponent =  withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile})(withUrlDataContainerComponent);