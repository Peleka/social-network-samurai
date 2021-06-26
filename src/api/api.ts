import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "9c832af0-5e6b-4bff-a294-4118cc9c6256"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 3) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    unFollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    followUser(id: number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId)
    }

}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    },
}

