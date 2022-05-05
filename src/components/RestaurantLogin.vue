<template>
    <v-container>
        <h1>Business Log-In</h1>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6">
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    outlined
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    outlined
                ></v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleRestaurantLogin">Log-In</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main'
import {mapActions} from 'pinia';

    export default {
        name: "RestaurantLogin",
        data:() =>({
            email: '',
            password: '',
        }),
        methods:{
            ...mapActions(useMainStore, ['restaurantLogin']),
            handleRestaurantLogin(){
                this.restaurantLogin(this.email, this.password)
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>