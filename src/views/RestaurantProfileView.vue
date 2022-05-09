<template>
    <v-container>
        <RestaurantProfile/>
    </v-container>
</template>

<script>
import RestaurantProfile from '@/components/restaurantOperator/RestaurantProfile.vue'
    export default {
        name : "RestaurantProfileView",
        components: {
                RestaurantProfile

        }
    }
</script>

<style lang="scss" scoped>

</style>