<script setup>
import { useBucketListStore } from "/stores/bucket-list.js"

const props = defineProps({
    city: {
        type: Object,
        required: true,
    },
})

const bucketStore = useBucketListStore()

const formatNumber = (number) => {
    return new Intl.NumberFormat().format(number)
}

const removeFromBucketList = () => {
    bucketStore.removeCity(props.city.id)
}
</script>

<template>
    <NuxtLink :to="`/cities/${city.id}`" style="text-decoration: none; color: inherit;">
        <v-card flat height="150" class="bucket-card">
            <v-card-title>{{ city.name }}</v-card-title>
            <v-card-subtitle class="mb-6">Population: {{ formatNumber(city.population) }}</v-card-subtitle>
            <v-row class="justify-center">
                <v-btn color="red" width="25%" @click.prevent="removeFromBucketList">Remove</v-btn>
            </v-row>
        </v-card>
    </NuxtLink>
</template>

<style scoped>
.bucket-card {
    margin-bottom: 20px;
    border: 1px solid #ccc;
    transition: transform 0.2s ease-in-out;
}

.bucket-card:hover {
    transform: scale(1.05);
}
</style>
