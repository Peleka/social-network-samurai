import React from "react";
import s from './Users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import {UserType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

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

const Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, index) => {
                return <span key={index}
                             className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.usersPage.map(u =>
                <div key={u.id}>
                    <div>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ?
                                    u.photos.small : userPhoto}
                                     className={s.ava_photo}
                                     alt={'ava'}
                                />
                            </NavLink>

                        </div>
                        <div>
                            {u.followed
                                ?
                                <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollowThunkCreator(u.id)
                                }}>
                                    Unfollow
                                </button>
                                : <button disabled={props.isFollowingInProgress.some(id => id === u.id)}
                                          onClick={() => {
                                              props.followThunkCreator(u.id)
                                          }}>
                                    Follow
                                </button>
                            }
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>
            )
        }
    </div>
}


export default Users;