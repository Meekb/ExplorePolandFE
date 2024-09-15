import { defineStore } from 'pinia'

export const useBucketListStore = defineStore('bucketList', {
    state: () => ({
        cities: [],
    }),
    actions: {
        addCity(city) {
            if (!this.cities.some((c) => c.id === city.id)) {
                console.log('addCity')
                this.cities.push(city)
            }
        },
        removeCity(cityId) {
            console.log('removeCity')
            this.cities = this.cities.filter((city) => city.id !== cityId)
        },
        // reorderCities(newOrder) {
        //     console.log('reorderCities')
        //     this.cities = newOrder
        // }
    }
})
