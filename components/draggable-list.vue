<script>
import draggable from 'vuedraggable'
import { useBucketListStore } from '/stores/bucket-list'
let id = 1;
export default {
    name: "simple",
    display: "Simple",
    order: 0,
    components: {
        draggable,
    },
    props: {
        cities: {
            type: Array,
            required: true,
        },
    },
    methods: {
        formatNumber(number) {
            return new Intl.NumberFormat().format(number)
        },
        removeFromBucketList(cityId) {
            const bucketListStore = useBucketListStore()
            bucketListStore.removeCity(cityId)
        }
    },
};
</script>

<template>
    <div class="row">
        <div class="col-6">
            <draggable
                :list="cities"
                item-key="name"
            >
                <template #item="{ element }">
                    <v-card height="150" hover class="mb-8">
                        <v-card-title>{{ element.name }}</v-card-title>
                        <v-card-subtitle class="mb-6">
                            population {{ formatNumber(element.population) }}
                        </v-card-subtitle>
                        <v-row class="px-4" align="center" justify="space-between" no-gutters>
                            <v-col cols="9">
                                <div>{{ element.description }}</div>
                            </v-col>
                            <v-col cols="3" class="text-right">
                                <v-btn color="red" width="150" @click.prevent="removeFromBucketList(element.id)">Remove</v-btn>
                            </v-col>
                        </v-row>
                    </v-card>
                </template>
            </draggable>
        </div>

        <rawDisplayer class="col-3" :value="cities" title="List" />
    </div>
</template>
