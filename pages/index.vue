<script setup>
import { ref, onMounted } from 'vue'
const cities = ref([])

onMounted(async () => {
    const { $api } = useNuxtApp()
    try {
        const response = await $api.get('/cities')
        cities.value = response.data
    } catch (error) {
        console.error('Failed to fetch cities:', error)
    }
})
</script>

<template>
    <div class="index-container">
        <header-banner />
        <main>
            <v-container fluid>
                <v-row>
                    <v-col
                        v-for="city in cities"
                        :key="city.id"
                        :id="`city-${city.id}`"
                        cols="12"
                        sm="6"
                        md="4"
                    >
                        <city-card :city="city" />
                    </v-col>
                </v-row>
            </v-container>
        </main>
    </div>
</template>

<style>
.index-container {
    background-image: url('/arms.jpg');
    background-size: cover; /* Ensures the image covers the entire background */
    background-position: center; /* Centers the image */
    background-repeat: no-repeat; /* Prevents the image from repeating */
    min-height: 100vh; /* Ensures the background covers the full viewport height */
}

.v-container {
    padding: 20px;
    border-radius: 10px; /* Optional: Adds a subtle rounded corner effect */
}
</style>
