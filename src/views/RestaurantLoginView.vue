<template>
    <v-container>
        <v-form>
            <v-container>
                <RestaurantRegistration/>
                <RestaurantLogin/>
            </v-container>
        <v-btn>Login</v-btn>
        <v-btn>Register</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import RestaurantRegistration from '@/components/restaurantOperator/RestaurantRegistration.vue'
import RestaurantLogin from '@/components/restaurantOperator/RestaurantLogin.vue'



    export default {
        name : "RestaurantLoginView",
        components : {
            RestaurantRegistration,
            RestaurantLogin
            
        }   
 }
</script>

<style lang="scss" scoped>

</style>