import React from "react";
import {UserType} from "../../redux/usersReducer";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

type UsersPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    usersPage: Array<UserType>
    isFollowingInProgress: Array<number>
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

const Users: React.FC<UsersPropsType> = ({
                                             totalUsersCount, pageSize, currentPage,
                                             onPageChanged, usersPage, isFollowingInProgress,
                                             unfollowThunkCreator,
                                             followThunkCreator
                                         }) => {

    return <div>
        <Paginator
            currentPage={currentPage}
            onPageChanged={onPageChanged}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
        />

        {
            usersPage.map(u => <User
                key={u.id}
                user={u}
                isFollowingInProgress={isFollowingInProgress}
                followThunkCreator={followThunkCreator}
                unfollowThunkCreator={unfollowThunkCreator}
            />)
        }
    </div>
}

export default Users;