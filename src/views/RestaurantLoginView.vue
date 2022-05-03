<template>
    <v-container>
        
        <v-form>
            <v-container>
                <RestaurantRegistration/>
            </v-container>
        <v-btn>Login</v-btn>
        <v-btn>Register</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import RestaurantRegistration from '@/components/RestaurantRegistration.vue'



    export default {
        name : "RestaurantLoginView",
        components : {
            RestaurantRegistration
            
        }   
    }
</script>

<style lang="scss" scoped>

</style>