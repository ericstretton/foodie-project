<template>
    <v-container>
        <v-row  
            >
        <v-col
        md="10"
        lg="12">

        <v-container>
        <h3>Restaurant Name: {{restaurantObject.name}}</h3>
        <v-img width="25%" :src="restaurantObject.profileUrl"></v-img>
        <h3>Address: {{restaurantObject.address}}</h3>
        <v-img class="white--text align-end" v-bind="restaurantObject" :src="restaurantObject.bannerUrl"  alt="Banner Image"><v-card-title  v-text="restaurantObject.name"></v-card-title></v-img>
        <p>Bio: {{restaurantObject.bio}}</p>
        <h3>Location: {{restaurantObject.city}}</h3>
        <h3>Email: {{restaurantObject.email}}</h3>
        <h3>Phone Number: {{restaurantObject.phoneNum}}</h3>
        </v-container>
            
            <v-card
            width="50vw">
                <v-subheader>
                    <h1>Menu Information</h1>
                </v-subheader>
                
            </v-card>
            <ViewRestaurantMenuItems/>
        </v-col>
        </v-row>
        
        
    </v-container>
</template>

<script>

import ViewRestaurantMenuItems from '@/components/ViewRestaurantMenuItems.vue'
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

    export default {
        name : "RestaurantPublic",
        components: {
                ViewRestaurantMenuItems,
        },

        data: ()=> ({
            name: '',
            address: '',
            bio: '',
            city: '',
            email: '',
            phoneNum: '',
            bannerUrl: undefined,
            profileUrl: undefined,
            
                }),
        mounted () {
            this.getRestaurantInfoById();
        },
        computed: {
            ...mapState(useMainStore, ['restaurantObject'])
        },
        methods: {
            ...mapActions(useMainStore, ['getRestaurantInfoById']),
            
            
        },
        
    }
</script>

<style lang="scss" scoped>

</style>