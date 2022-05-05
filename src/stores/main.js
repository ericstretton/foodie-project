import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'

export const useMainStore = defineStore('main',{
    state: () =>{
        return {
            restaurantName : '',
            restaurantAddress: '',
            restaurantBannerImage: '',
            restaurantBio: '',
            restaurantCityName: '',
            restaurantEmail: '',
            restaurantPhoneNumber: '',
            restaurantProfileImage: ''
        }
    },
    methods:{
        getRestaurantInfo(){
            axios.request({
                headers : {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                params : {
                    restuarantId: this.restuarantId
                },
                url : process.env.VUE_APP_API_URL+"restaurant",
                method : "GET"
            }).then((response) =>{
                this.restaurantName = response.data[1].name;
                this.restaurantAddress = response.data[1].address;
                this.restaurantBannerImage = response.data.bannerUrl;
                this.restaurantBio = response.data.bio;
                this.restaurantCityName = response.data.city;
                this.restaurantEmail = response.data.email;
                this.restaurantPhoneNumber = response.data.phoneNum;
                this.restaurantProfileImage = response.data.profileUrl;
            })
        },

    },
    actions: {
        

// Client User Actions
// #1 Post to register new users
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
                this.userRegisterAlert(error.response);
            })
        },
// #2 Registration alert for user in instance of error
        userRegisterAlert(error){
            return (error)
        },
//  #3 Client User Login
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


// Restaurant Client Actions
// #1 Restaurant registration
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
// #2 Restaurant Client Login 
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
        },

// Menu Actions 
// Restaurant Related
        // Restaurant side Menu Post request to create new menu items 
    createMenuItem(name, description, price, imageUrl){
        axios.request({
            headers:{
                "x-api-key" : process.env.VUE_APP_API_KEY,
                "token" : cookies.get('sessionToken')
            },
            url : process.env.VUE_APP_API_URL+"menu",
            method : "POST",
            data: {
                name,
                description, 
                price, 
                imageUrl
            }
        }).then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    }
    },
    
    
    
})
    