<template>
    <v-container>
    <v-row
    
    >
    <v-col
    
    class=".d-lg-cols=10 .d-sm-cols=6"
    >
    <div>
        <v-card
            class="mx-auto mb-8 "
            max-width="400"
            v-for="restaurant in restaurantObjects" 
            :key="restaurant.restaurantId"
            
        >
            <v-img
            class="white--text align-end"
            height="200px"
            :src="restaurant.bannerUrl"
            >
            <v-card-title
            >{{restaurant.name}} </v-card-title>
            </v-img>

            <v-card-subtitle 
            class="pb-0">
            {{restaurant.city}}
            </v-card-subtitle>

            <v-card-text class="text--primary">
            <div><p
            >{{restaurant.address}}
            </p></div>

            <div><p
            >{{restaurant.phoneNum}}
            </p></div>
            </v-card-text>

            <v-card-actions>
                <v-btn
                color="orange"
                text
                >
                Menu
                </v-btn>

                <v-btn
                color="orange"
                text
                
                >
                Restaurant Page
            </v-btn>
            </v-card-actions>
        </v-card>
        </div>
    </v-col>
    </v-row>
    
    </v-container>
        
</template>

<script>
import {mapActions} from 'pinia';
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';

    export default {
  components: {  },
        name : "ExploreHome",
        data: ()=> ({
            name: '',
            address: '',
            bio: '',
            city: '',
            email: '',
            phoneNum: '',
            bannerUrl: undefined,
            profileUrl: undefined,
            
            restaurantId: []
                }),
        mounted () {
            this.getRestaurantInfo();
        },
        computed: {
            ...mapState(useMainStore, ['restaurantObjects'])
        },
        methods: {
            ...mapActions(useMainStore, ['getRestaurantInfo']),
            
        },
    }
</script>

<style lang="scss" scoped>

</style>