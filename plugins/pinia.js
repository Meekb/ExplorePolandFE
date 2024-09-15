import { createPinia } from 'pinia'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    const pinia = createPinia()
    pinia.use(({ store }) => {
        if (process.client) {
            const storedState = sessionStorage.getItem(store.$id)
            if (storedState) {
                store.$patch(JSON.parse(storedState))
            }

            store.$subscribe((mutation, state) => {
                sessionStorage.setItem(store.$id, JSON.stringify(state))
            })
        }
    })
    nuxtApp.vueApp.use(pinia)
})
