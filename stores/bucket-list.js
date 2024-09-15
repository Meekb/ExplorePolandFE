// stores/bucketList.js
import { defineStore } from 'pinia'

export const useBucketListStore = defineStore('bucketList', {
    state: () => ({
        cities: [],
    }),
    actions: {
        addCity(city) {
            if (!this.cities.some((c) => c.id === city.id)) {
                this.cities.push(city)
            }
        },
        removeCity(cityId) {
            this.cities = this.cities.filter((city) => city.id !== cityId)
        },
        reorderCities(newOrder) {
            this.cities = newOrder
        }
    }
})
