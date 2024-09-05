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
    border: 1.5px solid oldlace;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 40px;
    min-width: 275px;
    width: 100%;
    height: 100%;
    transition: transform 0.2s, box-shadow 0.2s;
    background-color: #ECEFF1;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-title {
    font-size: 1.5em;
    font-weight: bold;
    color: #333333;
}

.card-subtitle {
    font-size: 1em;
    color: #777777;
    margin-top: 10px;
}
</style>
