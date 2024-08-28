// plugins/axios.js
import axios from 'axios'

export default defineNuxtPlugin(() => {
    const api = axios.create({
        baseURL: 'http://localhost:3000', // Your Rails API base URL
    })

    return {
        provide: {
            api,
        },
    }
})
