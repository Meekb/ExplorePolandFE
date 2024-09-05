<script setup>
import { ref } from 'vue'
import { useAuthStore } from '~/stores/auth'
const email = ref('')
const password = ref('')
const password_confirmation = ref('')

const { $api } = useNuxtApp()
const authStore = useAuthStore()

const register = async () => {
    try {
        const response = await $api.post('/users', {
            user: {
                email: email.value,
                password: password.value,
                password_confirmation: password_confirmation.value
            }
        })
        authStore.setUser(response.data.user)
        authStore.setToken(response.data.token)
        console.log('Registration successful', response.data)
        // Redirect to a protected route or show a success message
    } catch (error) {
        console.error('Registration failed', error)
    }
}
</script>

<template>
  <div class="container">
      <h2>Register</h2>
      <form @submit.prevent="register">
          <input v-model="email" type="email" placeholder="Email" required />
          <input v-model="password" type="password" placeholder="Password" required />
          <input v-model="password_confirmation" type="password" placeholder="Confirm Password" required />
          <button type="submit">Register</button>
      </form>
  </div>
</template>
