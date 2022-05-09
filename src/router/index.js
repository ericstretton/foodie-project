import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ExploreView from '@/views/ExploreView.vue'
import RestaurantLoginView from '@/views/RestaurantLoginView'
import RestaurantProfileView from '@/views/RestaurantProfileView'
import RestaurantPublicView from '@/views/RestaurantPublicView'
import UserProfileView from '@/views/UserProfileView'

Vue.use(VueRouter)

const routes = [
  {
    path : "/login",
    name : "Login",
    component : LoginView
  },
  {
    path : "/explore",
    name : "Explore",
    component : ExploreView
  },
  {
    path : "/restaurant-login",
    name : "RestaurantLogin",
    component: RestaurantLoginView
  },
  {
    path : "/restaurant-profile",
    name : "RestaurantProfile",
    component : RestaurantProfileView
  },
  {
    path : "/restaurant",
    name : "RestaurantPublic",
    component : RestaurantPublicView
  },
  {
    path : "/user-profile",
    name : "UserProfile",
    component : UserProfileView
  }
  
  
]

export const router = new VueRouter({
  routes
})

export default router
