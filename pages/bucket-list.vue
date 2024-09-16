<script setup>
import { useBucketListStore } from '../stores/bucket-list.js'
import {storeToRefs} from "pinia"
import DraggableList from "/components/draggable-list.vue"

const bucketStore = useBucketListStore()
const { cities } = storeToRefs(bucketStore)
</script>

<template>
    <v-container>
        <div class="mb-8 w-100 flex justify-space-between" style="display: flex; justify-content: space-between; align-items: center;">
            <NuxtLink to="/" class="back-link">Back to Cities</NuxtLink>
        </div>
        <h2>My Bucket List (Lista rzeczy, które chcę zobaczyć przed śmiercią)</h2>
        <draggable-list :cities="cities" />
    </v-container>
</template>

<style scoped>
.v-card {
    padding: 10px;
    background-color: white;
}
</style>
