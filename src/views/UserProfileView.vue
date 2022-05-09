<template>
    <v-container>
        <ViewUserProfileInfo/>
        <UpdateUserProfile/>
    </v-container>
</template>

<script>
import ViewUserProfileInfo from '@/components/userClient/ViewUserProfileInfo.vue'
import UpdateUserProfile from '@/components/userClient/UpdateUserProfile.vue'
    export default {
        name : "UserProfileView",
        components : {
            ViewUserProfileInfo,
            UpdateUserProfile
        }
    }
</script>

<style lang="scss" scoped>

</style>