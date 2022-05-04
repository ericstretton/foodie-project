<template>
    <v-container>
        
        <v-form>
            <v-container>
                <UserRegistration/>
                <UserLogin/>
            </v-container>
        <v-btn>Login</v-btn>
        <v-btn>Register</v-btn>
        </v-form>
    </v-container>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue"
import UserRegistration from '@/components/UserRegistration.vue'


    export default {
        name : "LoginView",
        components : {
            UserLogin,
            UserRegistration
               
        }   
    }
</script>

<style lang="scss" scoped>

</style>