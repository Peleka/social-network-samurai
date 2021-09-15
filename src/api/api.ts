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
        console.warn('Please profileAPI object') //чтобы избежать дублир кода написали ворнинг и ретург на нужный метод чтобы ничего не сломалось
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId: string) {
        return instance
            .get(`profile/` + userId)
    },
    getStatus(userId: string) {
        return instance
            .get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance
            .put(`profile/status/`, {status: status}) // properties смотрим в доке api
    },
    savePhoto(photoFile: string) {
        const formData = new FormData()
        formData.append("image", photoFile)
        return instance
            .put(`profile/photo`,formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            } )

    }
}

export const authAPI = {
    me() {
        return instance
            .get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean = false) {
        return instance
            .post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance
            .delete(`auth/login`)
    }
}

