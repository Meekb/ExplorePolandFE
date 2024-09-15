<script setup>
import { useBucketListStore } from '../stores/bucket-list.js'
import BucketListItem from '~/components/bucket-list-item.vue'
import {storeToRefs} from "pinia"

const bucketStore = useBucketListStore()
const { cities } = storeToRefs(bucketStore)
</script>

<template>
    <v-container>
        <div class="mb-8 w-100 flex justify-space-between" style="display: flex; justify-content: space-between; align-items: center;">
            <NuxtLink to="/" class="back-link">Back to Cities</NuxtLink>
        </div>
        <h2>My Bucket List (Lista rzeczy, które chcę zobaczyć przed śmiercią)</h2>

        <v-row>
            <v-col
                v-for="(city, index) in cities"
                :key="'bucket-item-' + index"
                cols="12" md="6" lg="4"
            >
                <bucket-list-item :city="city" class="my-3" />
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
    padding: 10px;
    background-color: white;
}
</style>
