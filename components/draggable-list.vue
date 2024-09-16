<script setup>
import draggable from 'vuedraggable'

const props = defineProps({
    cities: {
        type: Array,
        required: true,
    },
})

const localCities = ref(props.cities)
</script>

<template>
  <draggable v-model="localCities" :item-key="localCities.name">
      <template>
        <v-row>
            <v-col
                    v-for="(city, index) in localCities"
                    :key="'bucket-item-' + index"
                    cols="12" md="6" lg="4"
            >
                <bucket-list-item :city="city" class="my-3" />
            </v-col>
        </v-row>
      </template>
  </draggable>
</template>
