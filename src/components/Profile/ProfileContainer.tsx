import {connect} from "react-redux";
import React from "react";
import Profile from "./Profile";
import {
    getStatusThunkCreator,
    getUsersProfileThunkCreator,
    ProfileType, savePhoto,
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
    authorizedUserId: null | number
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUsersProfileThunkCreator: (userId: string) => void
    getStatusThunkCreator: (userId: string) => void
    updateStatusThunkCreator: (status: string) => void
    savePhoto: (photoFile: any) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile = () => {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = JSON.stringify(this.props.authorizedUserId)
            if (!userId) {
                this.props.history.push("/login") //способ редирект на логин
            }
        }
        this.props.getUsersProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatusThunkCreator}
                     savePhoto={this.props.savePhoto}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.id,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        getUsersProfileThunkCreator,
        getStatusThunkCreator,
        updateStatusThunkCreator,
        savePhoto//не сам санккреэтор передаем а создается в памяти отдельная функция колбек 73урок 33:22 время
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//
// let withUrlDataContainerComponent = withRouter(ProfileContainer) //вернет компоненту , в нее данные из url придут
//
// export default withAuthRedirect(connect(mapStateToProps, {getUsersProfileThunkCreator})(withUrlDataContainerComponent)); // связывает со store