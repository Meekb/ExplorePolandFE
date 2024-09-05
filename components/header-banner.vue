<script setup>
import { useAuthStore } from '/stores/auth.js'

const authStore = useAuthStore()

const logoutUser = () => {
    authStore.logout()
}
</script>

<template>
    <div class="header-container">
        <header>
            <h1>Explore Poland ~ Poznaj Polskę</h1>
        </header>
        <div class="subheader">
            <h2>Select a city to explore</h2>
            <nav class="logout-nav">
                <ul>
                    <li v-if="!authStore.isAuthenticated">
                        <v-btn color="white" @click="logoutUser">Logout</v-btn>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<style scoped>
.header-container {
    margin: 0 0 40px 0;
    padding: 0;
    width: 100%;
}

header {
    background-color: white; /* or any other color */
    padding: 20px; /* Optional: Add padding if needed */
    text-align: center;
}

.subheader {
    background-color: #B71C1C;
    padding: 20px; /* Optional: Add padding if needed */
    margin: 0;
    text-align: center;
}
</style>
