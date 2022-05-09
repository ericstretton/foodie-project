<template>
    <v-container>
        <v-subheader>
            <h1>Your Information</h1>
        </v-subheader>
        <v-container>
        <h3>Client Id: {{userObject.clientId}}</h3>
        <v-img width="25%" :src="userObject.pictureUrl"></v-img>
        <h3>Created At: {{userObject.createdAt}}</h3>
        <h3>First Name: {{userObject.firstName}}</h3>
        <h3>Last Name: {{userObject.lastName}}</h3>
        <h3>Email: {{userObject.email}}</h3>
        <h3>Username: {{userObject.username}}</h3>
        </v-container>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapState} from 'pinia';
import {mapActions} from 'pinia';
    export default {
        name: "ViewUserProfileInfo",
        data: ()=> ({

        }),
        mounted () {
            this.viewUserInfo();
        },
        computed: {
            ...mapState(useMainStore, ['userObject'])
        },
        methods: {
            ...mapActions(useMainStore, ['viewUserInfo'])
        }
    }
</script>

<style lang="scss" scoped>

</style>