import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {getUsersProfileThunkCreator, ProfileType} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
}

type MapDispatchPropsType = {
    getUsersProfileThunkCreator: (userId: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = "2"
        }
        this.props.getUsersProfileThunkCreator(userId)

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

let withUrlDataContainerComponent = withRouter(ProfileContainer) //вернет компоненту , в нее данные из url придут

export default connect(mapStateToProps, {getUsersProfileThunkCreator})(withUrlDataContainerComponent); // связывает со store