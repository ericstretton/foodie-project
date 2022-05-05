<template>
    <v-container>   
        <v-subheader>
        <h1>Restaurants Current Information</h1>
        </v-subheader>
        <v-subheader>
        <h1>Update Restaurant Information</h1>
        </v-subheader>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';


    export default {
        name: 'RestaurantProfileInformation',
        methods: {
            ...mapState(useMainStore, ['getRestaurantInfo']),

    }
    }
</script>

<style lang="scss" scoped>

</style>