import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'

export const useMainStore = defineStore('main',{
    
    methods:{

    },
    actions: {
        createUser(username, firstName, lastName, email, password, pictureUrl){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    "Content-Type": "application/json"
                },
                url: process.env.VUE_APP_API_URL+"client",
                method : "POST",
                data: {
                    username, 
                    firstName,
                    lastName,
                    email,
                    password,
                    pictureUrl
                }
            }).then((response) =>{
                cookies.set('sessionToken', response.data.token);
                console.log(cookies.get('sessionToken'));
                router.push('/explore');
            }).catch((error) =>{
                console.log(error.response.data);
                // this.userRegisterAlert(error.response);
            })
        },

        userRegisterAlert(error){
            return (error)
        },

        userLogin(password, email){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json'
                },
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "POST",
                data: {
                    password,
                    email
                },
            }).then((response) =>{
                console.log(response);
                cookies.set('sessionToken', response.data.token);
                router.push('/explore');
            }).catch((error) =>{
                console.log(error);
            })
        },



        createRestaurant(name, address, bio, city, email, password, phoneNum, bannerUrl, profileUrl ){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    'Content-Type' : 'application/json',
                    "token" : cookies.get('sessionToken'),
                },
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "POST",
                data: {
                    name,
                    address,
                    phoneNum,
                    bio,
                    city,
                    email,
                    password,
                    bannerUrl,
                    profileUrl
                },
            }).then((response) =>{
                cookies.set('sessionToken', response.data.token);
                console.log(cookies.get('sessionToken'));
                router.push('/restaurant-profile')
            }).catch((error) =>{
                console.log(error);
            })
        },
        restaurantLogin(email, password){
            axios.request({
                headers:{ 
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url : process.env.VUE_APP_API_URL+"restaurant-login",
                method: "POST",
                data: {
                    email,
                    password
                },
            }).then((response) =>{
                cookies.set('sessionToken', response.data.token);
                console.log(cookies.get('sessionToken'));
                router.push('/restaurant-profile')
            }).catch((error) =>{
                console.log(error);
            })
        }
    },
    
    
})
    