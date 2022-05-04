<template>
    <v-container>
        <h1>User Registration</h1>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6">
                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    outlined
                ></v-text-field>
                <v-text-field
                    v-model="lastName"
                    label="Last Name"
                    outlined
                ></v-text-field>
                <v-text-field
                    v-model="username"
                    label="Username"
                    outlined
                ></v-text-field>
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
                <v-text-field
                    v-model="pictureUrl"
                    label="Profile Picture (URL)"
                    outlined
                ></v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleUserRegistration">Submit</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapActions} from 'pinia';

    export default {
        name: "UserRegistration",
        data: ()=> ({
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            pictureUrl: undefined

        }),
        methods:{
            ...mapActions(useMainStore, ['createUser']),
            handleUserRegistration() {
                this.createUser(this.firstName, this.lastName, this.username, this.email, this.password, this.pictureUrl);
            },
            handleError(response){
                console.log(response);
            }
        },
        mounted () {
            useMainStore().$onAction(({name, after})=>{
                if (name == "userRegisterAlert"){
                    console.log("handling");
                    after((response)=>{
                        this.handleError(response);
                    })
                }
            });
        },
    }
</script>

<style lang="scss" scoped>

</style>