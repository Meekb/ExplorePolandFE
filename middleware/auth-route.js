import { useAuthStore } from '@/stores/auth'

export default defineNuxtRouteMiddleware((to, from) => {
    const authStore = useAuthStore()

    if (!authStore.authToken) {
        return navigateTo('/login') // Redirect to login if not authenticated
    }
})
