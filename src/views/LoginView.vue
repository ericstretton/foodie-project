<template
color="cyan lighten-4">
    <v-container>
        <UserRegistration/>
        <UserLogin/>
    </v-container>
</template>

<script>
import UserLogin from "@/components/UserLogin.vue"
import UserRegistration from '@/components/UserRegistration.vue'

    export default {
        name : "LoginView",
        components : {
            UserRegistration,
            UserLogin,
               
        }   
    }
</script>

<style lang="scss" scoped>

</style>