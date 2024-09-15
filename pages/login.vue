<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'

const email = ref('')
const password = ref('')
const { $api } = useNuxtApp()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
    try {
        const response = await $api.post('/users/sign_in', {
            user: {
                email: email.value,
                password: password.value
            }
        })
        const token = response.data.token
        authStore.setUser(response.data)
        authStore.setToken(token)
        authStore.$subscribe(token, { detached: true })
        await router.push('/')
    } catch (error) {
        console.error('Login failed', error)
    }
}
</script>

<template>
    <v-container fluid class="login-container">
        <v-row align="center" justify="center">
            <v-col cols="12" md="6" lg="4">
                <v-card class="pa-4">
                    <v-card-title class="text-center">
                        <h2>Login</h2>
                    </v-card-title>
                    <v-card-text>
                        <v-form @submit.prevent="login">
                            <v-text-field
                                    v-model="email"
                                    label="Email"
                                    type="email"
                                    required
                                    outlined
                            ></v-text-field>

                            <v-text-field
                                    v-model="password"
                                    label="Password"
                                    type="password"
                                    required
                                    outlined
                            ></v-text-field>

                            <v-btn
                                    class="mt-4"
                                    color="primary"
                                    type="submit"
                                    block
                            >
                                Login
                            </v-btn>
                        </v-form>
                        <v-btn
                            class="mt-4"
                            color="primary"
                            block
                        >
                            Register
                        </v-btn>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.login-container {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-card {
    width: 100%;
}

.v-text-field,
.v-btn {
    width: 100%;
}
</style>

