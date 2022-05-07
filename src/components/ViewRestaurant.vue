<template>
    <v-container>
        <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="restaurantObject.bannerUrl"
    >
      <v-card-title>{{restaurantObject.name}} </v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">
      {{restaurantObject.city}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{restaurantObject.address}}</div>

      <div>{{restaurantObject.phoneNum}}</div>
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
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';
import {mapActions} from 'pinia';

    export default {
        name : "ViewRestaurant",
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
            ...mapState(useMainStore, ['restaurantObject'])
        },
        methods: {
            ...mapActions(useMainStore, ['getRestaurantInfo']),
            
        },
        
}
</script>

<style lang="scss" scoped>

</style>