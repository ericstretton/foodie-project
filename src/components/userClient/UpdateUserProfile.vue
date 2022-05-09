<template>
    <v-container>
        <v-subheader>
        <h1>Update Your Information</h1>
        </v-subheader>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="10"
                sm="6">
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="username"
                    label="Username"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
                    outlined>
                </v-text-field>
                <v-text-field
                    v-model="pictureUrl"
                    label="Profile Picture (URL)"
                    outlined>
                </v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleUpdateUserInfo">Update Information</v-btn>
        <v-subheader>
        <h1>Delete Account</h1>
        </v-subheader>
        <v-btn @click="handleDeleteAccount">Delete Account</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapActions} from 'pinia';
    export default {
        name: "UpdateUserProfile",
        data: ()=> ({
            email: '',
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            pictureUrl: undefined
            
        }),
        methods: {
            ...mapActions(useMainStore, ['updateUserInfo', 'deleteClientAccount']),
            handleUpdateUserInfo(){
                this.updateUserInfo(this.email, this.username, this.firstName, this.lastName, this.password, this.pictureUrl )
            },
            handleDeleteAccount(){
                this.deleteClientAccount(this.email, this.username, this.firstName, this.lastName, this.pictureUrl);
            }   
        }
    }
</script>

<style lang="scss" scoped>

</style>