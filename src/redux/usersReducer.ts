import {ActionsTypes, AppDispatch} from "./redux-store"
import {usersAPI} from "../api/api";

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_IS_FETCHING = "SET_IS_FETCHING"
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"

// type LocationType = {
//     city: string
//     country: string
// }

type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: PhotosType
    followed: boolean

    status: string
    // location: LocationType
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 5 as number,
    totalUsersCount: 20 as number,
    currentPage: 1 as number,
    isFetching: true as boolean,
    isFollowingInProgress: [] as Array<any>
}

export type InitialStateType = typeof initialState

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.count
            }
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.id]
                    : state.isFollowingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: FOLLOW, userID} as const)
export const unfollow = (userID: number) => ({type: UNFOLLOW, userID} as const)
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users} as const)
export const setCurrentPage = (currentPage: number) => ({type: SET_CURRENT_PAGE, currentPage} as const)
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
} as const)
export const setIsFetching = (isFetching: boolean) => ({type: SET_IS_FETCHING, isFetching} as const)
export const toggleFollowingInProgress = (isFetching: boolean, id: number) => ({
    type: FOLLOWING_IN_PROGRESS,
    isFetching,
    id
} as const)


export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(setIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                // debugger
                dispatch(setIsFetching(false))
                dispatch(setUsers(data.items))
                //временно в комменте, чтобы не выводило миллион страниц
                // dispatch(setTotalUsersCount(response.data.totalCount))
            })
    }
}

export const unfollowThunkCreator = (id: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.unFollowUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(id))
                }
                dispatch(toggleFollowingInProgress(false, id))
            })
    }
}

export const followThunkCreator = (id: number) => {
    return (dispatch: AppDispatch) => {
        dispatch(toggleFollowingInProgress(true, id));
        usersAPI.followUser(id)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(id))
                }
                dispatch(toggleFollowingInProgress(false, id))
            })
    }
}