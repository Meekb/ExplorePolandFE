import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () =>({
        user: null,
        token: null,
    }),
    actions: {
        setUser(userData) {
            this.user = userData
        },
        setToken(token) {
            this.token = token
        },
        clearAuth() {
            this.user = null
            this.token = null
        },
        logout() {
            // Optionally, make an API call to log out the user server-side
            // For example:
            // await $api.delete('/users/sign_out')

            // Clear the user and token from the state
            this.clearAuth()

            // Optionally, remove the token from localStorage or cookies
            sessionStorage.removeItem('token')

            // Redirect the user to the login page or homepage
            useRouter().push('/login')
        }
    },
    getters: {
        isAuthenticated: (state) => !!state.token
    },
})
