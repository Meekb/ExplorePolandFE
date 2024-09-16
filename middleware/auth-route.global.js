import { useAuthStore } from '/stores/auth.js'

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()
    if (to.path === '/login') {
        return
    }
    if (!authStore.token) {
        return navigateTo('/login')
    }
})
