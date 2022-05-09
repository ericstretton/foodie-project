import axios from "axios";
import { defineStore } from "pinia";
import cookies from 'vue-cookies';
import {router} from '@/router'

export const useMainStore = defineStore('main',{
    state: () =>{
        return {
            restaurantObject: {
               
            },
            restaurantMenuObject: {
            },
            restaurantObjects: {

            },
            userObject: {

            }
            
        }
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

//  #4 View Existing Client User Information on Client Profile Page
        viewUserInfo(clientId, createdAt, email, firstName, lastName, pictureUrl, username){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    "token" : cookies.get('sessionToken'),
                },
                url: process.env.VUE_APP_API_URL+"client",
                method : "GET",
                data: {
                    clientId,
                    createdAt, 
                    email,
                    firstName,
                    lastName,
                    pictureUrl,
                    username
                }
            }).then((response) => {
                console.log(response);
                this.userObject = response.data[0]
            }).catch((error) => {
                console.log(error);
            })
        },

// #5 Update Client User Information on Client Profile Page
        updateUserInfo(email, username, firstName, lastName, password, pictureUrl){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    "token" : cookies.get('sessionToken'),
                },
                url : process.env.VUE_APP_API_URL+"client",
                method : "PATCH",
                data: {
                    email, 
                    username, 
                    firstName, 
                    lastName,
                    password,
                    pictureUrl
                }
            })
        },

// #6 Delete Client Account 
        deleteClientAccount(email, username, firstName, lastName, pictureUrl){
            axios.request({
                headers:{
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    "token" : cookies.get('sessionToken'),
                    "Content-Type" : 'application/json'
                },
                url : process.env.VUE_APP_API_URL+"client",
                method : "DELETE",
                data: {
                    email, 
                    username,
                    firstName,
                    lastName,
                    pictureUrl
                }
            }).then((response) => {
                console.log(response);
                router.push('/login')
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

// #3 View Restaurant Information ALL users for unique restaurant Id
        getRestaurantInfo(){
            axios.request({
                headers : {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                url : process.env.VUE_APP_API_URL+"restaurant",
                method : "GET"
            }).then((response) =>{
                this.restaurantObjects = response.data;
                
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        },

// #4 RestaurantId specific  restaurant view
        getRestaurantInfoById(){
            axios.request({
                headers : {
                    "x-api-key" : process.env.VUE_APP_API_KEY
                },
                params : {
                    restaurantId: this.restaurantObject.restaurantId
                },
                url : process.env.VUE_APP_API_URL+"restaurant",
                method : "GET"
            }).then((response) =>{
                this.restaurantObject = response.data[0];
                
                console.log(response);
            }).catch((error)=>{
                console.log(error);
            })
        },

        

// #4 Update Restaurant Client information
        updateRestaurantInfo(name, address, bio, city, phoneNum, email, bannerUrl, profileUrl){
            axios.request({
                headers: {
                    "x-api-key" : process.env.VUE_APP_API_KEY,
                    "token" : cookies.get('sessionToken')
                },
                url : process.env.VUE_APP_API_URL+"restaurant",
                method : "PATCH",
                data: {
                    name,
                    address,
                    bannerUrl, 
                    bio, 
                    city, 
                    email,
                    phoneNum, 
                    profileUrl
                }
            }).then((response) =>{
                console.log(response);
            }).catch((error) =>{
                console.log(error);
            })
        },

// Menu Actions 
// Restaurant Related
        // #1 Restaurant side Menu Post request to create new menu items 
    createMenuItem(name, description, price, imageUrl,){
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
    },

// #2 For All users, View Menu items based on restaurant Id param
    getRestaurantMenuItems(){
        axios.request({
            headers: {
                "x-api-key" : process.env.VUE_APP_API_KEY,
            },
            params : {
                restaurantId: this.restaurantObject.restaurantId
            },
            url : process.env.VUE_APP_API_URL+"menu",
            method: "GET"
        }).then((response) =>{
            this.restaurantMenuObject = response.data;
            
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    },
// #3 For Restaurant Client, Update menu item based on menuId
    updateMenuItem(description, imageUrl, menuId, name, price){
        axios.request({
            headers: {
                "x-api-key" : process.env.VUE_APP_API_KEY,
                "token" : cookies.get('sessionToken')
            },
            url : process.env.VUE_APP_API_URL+"menu",
            method: "PATCH",
            data: {
                description,
                imageUrl, 
                menuId, 
                name,
                price
                
            }
        }).then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    },

// #4 For Restaurant Client, Delete menu ite, based on menuId
    deleteMenuItem(menuId){
        axios.request({
            headers: {
                "x-api-key" : process.env.VUE_APP_API_KEY,
                "token" : cookies.get('sessionToken')
            },
            url : process.env.VUE_APP_API_URL+"menu",
            method : "DELETE",
            data: {
                menuId
            }
        }).then((response) =>{
            console.log(response);
        }).catch((error) =>{
            console.log(error);
        })
    },


    // Adding menu items to the shopping Cart. 
    addToCart(menuId, restaurantId){
        cookies.set("cartToken", menuId + restaurantId)
    }

    },

    getters: {
        
    }
    
    
})
    