import {connect} from "react-redux";
import {
    follow,
    followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    toggleFollowingInProgress,
    unfollow,
    unfollowThunkCreator,
    UserType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import React from "react";
import Users from "./Users";
import {Preloader} from "../common/Preloader/Preloader";


class UsersContainer extends React.Component<UsersPropsType, AppStateType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                usersPage={this.props.users}
                isFollowingInProgress={this.props.isFollowingInProgress}
                followThunkCreator={this.props.followThunkCreator}
                unfollowThunkCreator={this.props.unfollowThunkCreator}
            />
        </>
    }
}

type MapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingInProgress: Array<number>
}

type MapDispatchPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    followingInProgress: (isFetching: boolean, id: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isFollowingInProgress: state.users.isFollowingInProgress,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
//     return {
//         follow: (userId: number) => {
//             dispatch(followAC(userId))
//         },
//         unfollow: (userId: number) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users: Array<UserType>) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage: number) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalUserCount: number) => {
//             dispatch(setTotalUsersCountAC(totalUserCount))
//         },
//         setIsFetching: (isFetching: boolean) => {
//             dispatch(setIsFetchingAC(isFetching))
//         },
//     }
// }

export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        followingInProgress: toggleFollowingInProgress,
        getUsers: getUsersThunkCreator,
        unfollowThunkCreator, followThunkCreator
    })(UsersContainer)