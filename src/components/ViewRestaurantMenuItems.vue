<template>
    <v-container>
        <v-card
        class="mx-auto my-8"
        width="33%"
        v-for="object in restaurantMenuObject" 
        :key="object.menuId +object.restaurantId">
        <v-img
            class="black--text align-end"
            height="5%"
            :src="object.imageUrl"
            >
            <v-card-title
            >{{object.name}} </v-card-title>
            </v-img>

            <v-card-subtitle 
            class="pb-0">
            {{object.price}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div><p
            >{{object.description}}
            </p></div>
            </v-card-text>
            <v-card-actions>
            <v-row>
            <v-col
            cols="2">
                <v-btn
                color="orange"
                text
                small
                @click="addToCart"
                >
                Add To Cart
                </v-btn>
            </v-col>
            </v-row>
            </v-card-actions>
        </v-card>
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
            price: '',
            menuId: '',
            restaurantId: '',
            shoppingCart: []
        }),
        mounted () {
            this.getRestaurantMenuItems(this.restaurantId);
            
        },
        computed: {
            ...mapState(useMainStore, ['restaurantMenuObject'])
        },
        methods: {
            ...mapActions(useMainStore, ['getRestaurantMenuItems']),
            addToCart(restaurantMenuObject){
                console.log(restaurantMenuObject);
                let itemName = this.object.name;
                let itemPrice = this.object.price;
                let itemId = this.object.menuId
                this.shoppingCart.push(itemName, itemPrice, itemId)
            },
            
        },
    }
</script>

<style lang="scss" scoped>

</style>