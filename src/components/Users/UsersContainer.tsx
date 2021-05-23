import {connect} from "react-redux";
import {Dispatch} from "redux";
import {followAC, InitialStateType, setUsers, unfollowAC, UserType} from "../../redux/usersReducer";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {
    usersPage: InitialStateType
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType) : MapStatePropsType=> {
    return {
        usersPage: state.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsers(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)