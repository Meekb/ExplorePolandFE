import { useAuthStore } from '/stores/auth.js'

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (process.client && to.path === '/login') {
        return
    }
    if (process.client && !authStore.token) {
        return navigateTo('/login')
    }
})
