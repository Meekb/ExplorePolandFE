<script setup>
import { ref } from 'vue'

// Define your props
const props = defineProps({
    city: {
        type: Object,
        required: true,
    },
})

const formatNumber = (population) => {
    return new Intl.NumberFormat().format(population);
}
</script>

<template>
    <div class="city-card">
        <NuxtLink :to="`/cities/${city.id}`" style="text-decoration: none; color: inherit;">
            <v-card flat class="card">
                <v-card-title class="card-title">{{ city.name }}</v-card-title>
                <v-card-subtitle class="card-subtitle">Population: {{ formatNumber(city.population) }}</v-card-subtitle>
            </v-card>
        </NuxtLink>
    </div>
</template>

<style scoped>
.city-card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card {
    border: 1.5px solid black; /* Light grey border for a subtle look */
    border-radius: 10px; /* Slightly rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Soft shadow for depth */
    padding: 20px;
    margin-bottom: 40px;
    min-width: 275px;
    width: 100%;
    height: 100%;
    transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effects */
    background-color: #ffffff; /* Clean white background */
}

.card:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Darker shadow on hover */
}

.card-title {
    font-size: 1.5em; /* Larger, bold title */
    font-weight: bold;
    color: #333333; /* Darker color for text */
}

.card-subtitle {
    font-size: 1em; /* Regular font size for the subtitle */
    color: #777777; /* Subtle grey color for the subtitle */
    margin-top: 10px; /* Add some space between title and subtitle */
}
</style>
