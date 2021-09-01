import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UserPropsType = {
    user: UserType
    isFollowingInProgress: Array<number>
    unfollowThunkCreator: (id: number) => void
    followThunkCreator: (id: number) => void
}

const User: React.FC<UserPropsType> = ({user, isFollowingInProgress, unfollowThunkCreator,followThunkCreator }) => {

    return (
        <div>
            <div>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ?
                            user.photos.small : userPhoto}
                             className={s.ava_photo}
                             alt={'ava'}
                        />
                    </NavLink>

                </div>
                <div>
                    {user.followed
                        ?
                        <button disabled={isFollowingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollowThunkCreator(user.id)
                        }}>
                            Unfollow
                        </button>
                        : <button disabled={isFollowingInProgress.some(id => id === user.id)}
                                  onClick={() => {
                                      followThunkCreator(user.id)
                                  }}>
                            Follow
                        </button>
                    }
                </div>
            </div>
            <div>
                <div>{user.name}</div>
                <div>{user.status}</div>
            </div>
            )
        </div>
    )
}

export default User;