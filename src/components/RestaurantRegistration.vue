<template>
    <v-container>
        <h1>Restaurant Registration</h1>
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
                    v-model="password"
                    label="Password"
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
        <v-btn @click="handleRestaurantRegistration">Register</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapActions} from 'pinia';
    export default {
        name: "RestaurantRegistration",
        data: ()=> ({
            name: '',
            address: '',
            bio: '',
            city: '',
            email: '',
            password: '',
            phoneNum: '',
            bannerUrl: undefined,
            profileUrl: undefined
        }),
        methods:{
            ...mapActions(useMainStore, ['createRestaurant']),
            handleRestaurantRegistration() {
                this.createRestaurant(this.name, this.address, this.bio, this.city,
                this.email, this.password, this.phoneNum, this.bannerUrl, this.profileUrl );
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>