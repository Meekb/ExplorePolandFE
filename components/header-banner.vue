<script setup>
import { useAuthStore } from '/stores/auth.js'

const authStore = useAuthStore()
const router = useRouter()
const logoutUser = () => {
    authStore.logout()
}
</script>

<template>
    <div class="header-container">
        <header>
            <h1>Explore Poland ~ Poznaj Polskę</h1>
        </header>
        <div class="subheader">
            <nav class="logout-nav">
<!--                <v-container>-->
                    <v-row justify="space-between" align="center" class="button-row">
                        <v-col cols="auto">
                            <v-btn color="white" @click="router.push('/bucket-list')">Bucket List</v-btn>
                        </v-col>
                            <v-btn v-if="authStore.isAuthenticated" color="white" @click="logoutUser" class="logout-button">Logout</v-btn>
                        <v-col cols="auto">
                        </v-col>
                    </v-row>
<!--                </v-container>-->
            </nav>
        </div>
    </div>
</template>

<style scoped>
.header-container {
    margin: 0 0 40px 0;
    padding: 0;
    width: 100%;
}

header {
    background-color: white;
    padding: 20px;
    text-align: center;
}

.subheader {
    background-color: #B71C1C;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.logout-nav {
    margin-top: 10px;
}

.button-row {
    /*padding-left: 20px; !* Align buttons to the left with some padding *!*/
}
</style>
