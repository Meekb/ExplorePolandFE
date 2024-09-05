<script setup>
import { useRoute, useNuxtApp } from '#app'
import { ref } from 'vue'

const route = useRoute()
const { $api } = useNuxtApp()
const city = ref(null)
const attractions = ref(null)
const error = ref(null)

try {
    const cityResponse = await $api.get(`/cities/${route.params.id}`)
    city.value = cityResponse.data

    const attractionsResponse = await $api.get(`/cities/${route.params.id}/attractions`)
    attractions.value = attractionsResponse.data
} catch (err) {
    console.error('Error fetching city:', err)
    error.value = 'Failed to load city data'
}
</script>

<template>
    <main v-if="city">
        <HeroImage :cityName="city.name" :title="city.name" class="mb-6" />
        <v-container>
            <div class="mb-8">
                <h3>Description:</h3>
                <p>{{ city.description }}</p>
            </div>
            <div class="mb-8">
                <h3>Attractions:</h3>
                <v-list>
                    <v-list-item v-for="item in attractions" :key="item.name" :id:="item.name">
                        <strong>{{ item.name }}</strong>
                        <br/>
                        {{ item.description }}
                    </v-list-item>
                </v-list>
            </div>

            <NuxtLink to="/">Back to Cities</NuxtLink>
        </v-container>
    </main>
    <div class="error" v-else-if="error">
        <error-display>
            <p>{{ error }}</p>
        </error-display>
    </div>
    <p v-else>Loading...</p>
</template>
