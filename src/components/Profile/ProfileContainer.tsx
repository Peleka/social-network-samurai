import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator,
    ProfileType,
    updateStatusThunkCreator
} from "../../redux/profileReducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type MapStatePropsType = {
    profile: null | ProfileType
    status: string
}

type MapDispatchPropsType = {
    getUsersProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
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
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatusThunkCreator}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfileThunkCreator,
        getStatusThunkCreator, updateStatusThunkCreator //не сам санккреэтор передаем а создается в памяти отдельная функция колбек 73урок 33:22 время
    }),
    withRouter,
    // withAuthRedirect
)(ProfileContainer)

//
// let withUrlDataContainerComponent = withRouter(ProfileContainer) //вернет компоненту , в нее данные из url придут
//
// export default withAuthRedirect(connect(mapStateToProps, {getUsersProfileThunkCreator})(withUrlDataContainerComponent)); // связывает со store