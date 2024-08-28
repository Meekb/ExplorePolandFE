<script setup>
const props = defineProps({
    cityName: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
})

const imageUrl = `/` + props.cityName + `.jpg`;
</script>

<template>
    <div class="hero-image" :style="{ backgroundImage: `url(${imageUrl})` }">
        <div class="overlay">
            <h1>{{ title }}</h1>
            <h3>{{ description }}</h3>
        </div>
    </div>
</template>

<style scoped>
.hero-image {
    height: 60vh; /* Adjust the height as needed */
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    color: white;
}

.overlay {
    background-color: rgba(0, 0, 0, 0.5); /* Add a dark overlay */
    width: 100%;
    padding: 20px;
    text-align: center;
}
</style>
