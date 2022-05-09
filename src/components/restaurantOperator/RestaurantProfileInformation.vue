<template>
    <v-container>  
         
        <v-subheader>
        <h1>Restaurants Current Information</h1>
        </v-subheader>
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
        
        
        <v-subheader>
        <h1>Update Restaurant Information</h1>
        </v-subheader>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="10"
                sm="6">
                <v-text-field
                    v-model="name"
                    label="Restaurant Name"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="address"
                    label="Address"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="bio"
                    label="Descriptions"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="city"
                    label="City Name"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="phoneNum"
                    label="Phone Number"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="bannerUrl"
                    label="Banner Image (URL)"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="profileUrl"
                    label="Profile Image (URL)"
                    outlined>
                </v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleUpdateRestaurantInfo">Update Information</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';
import {mapActions} from 'pinia';


    export default {
        name: 'RestaurantProfileInformation',
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
            ...mapActions(useMainStore, ['updateRestaurantInfo', 'getRestaurantInfoById']),
            handleUpdateRestaurantInfo() {
                this.updateRestaurantInfo(this.name, this.address, this.bio, this.city, this.phoneNu, this.email, this.bannerUrl, this.profileUrl)
            },
            
            
        }
    }   

</script>

<style lang="scss" scoped>

</style>