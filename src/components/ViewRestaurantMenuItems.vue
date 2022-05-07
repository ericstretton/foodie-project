<template>
    <v-container>
        <h4>Item Name: {{restaurantMenuObject.name}}</h4>
        <h4>Price: ${{restaurantMenuObject.price}}</h4>
        <p>Description: {{restaurantMenuObject.description}}</p>
    </v-container>
</template>

<script>
import { mapActions } from 'pinia'
import { useMainStore } from '@/stores/main'
import {mapState} from 'pinia';
    export default {
        name: "ViewRestaurantMenuItems",
        data: ()=> ({
            name: '',
            description: '',
            imageUrl: undefined, 
            price: ''
        }),
        mounted () {
            this.getRestaurantMenuItems();
        },
        computed: {
            ...mapState(useMainStore, ['restaurantMenuObject'])
        },
        methods: {
            ...mapActions(useMainStore, ['getRestaurantMenuItems']),

        }
    }
</script>

<style lang="scss" scoped>

</style>