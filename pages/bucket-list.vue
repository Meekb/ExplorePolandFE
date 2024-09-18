<script setup>
import { useBucketListStore } from '../stores/bucket-list.js'
import { storeToRefs } from 'pinia'
import DraggableList from '/components/draggable-list.vue'
import { useDisplay } from 'vuetify'

const bucketStore = useBucketListStore()
const { cities } = storeToRefs(bucketStore)
onMounted(() => {
    const { name, xs, sm, md, lg, xl } = useDisplay()

    console.log('Current breakpoint:', name.value)  // Logs the current breakpoint (e.g., "md", "lg")
    console.log('Is xs:', xs.value)                 // True or False if current screen is xs
    console.log('Is sm:', sm.value)                 // True or False if current screen is sm
    console.log('Is md:', md.value)                 // True or False if current screen is md
    console.log('Is lg:', lg.value)                 // True or False if current screen is lg
    console.log('Is xl:', xl.value)                 // True or False if current screen is xl
})
</script>

<template>
    <v-container>
        <v-row>
            <div class="mb-8 w-100 flex justify-space-between" style="display: flex; justify-content: space-between; align-items: center;">
                <NuxtLink to="/" class="back-link">Back to Cities</NuxtLink>
            </div>
            <h2 class="mb-8">My Bucket List (Lista rzeczy, które chcę zobaczyć przed śmiercią)</h2>
            <DraggableList :cities="cities" />
        </v-row>
    </v-container>
</template>

<style scoped>
.v-card {
    padding: 10px;
    background-color: white;
}
</style>
