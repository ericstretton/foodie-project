import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import ExploreView from '@/views/ExploreView.vue'
import RestaurantLoginView from '@/views/RestaurantLoginView'

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
  }
  
  
]

export const router = new VueRouter({
  routes
})

export default router
