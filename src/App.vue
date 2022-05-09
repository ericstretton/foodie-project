<template>
  <v-app
  id="appPage"
  >
  
    <v-app-bar
      app
      color="primary"
    >
      <div class="d-flex align-center">
        <h1>Foodie</h1>
      </div>

      <v-spacer>
       
      </v-spacer>
        <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Profile</span>
        
      </v-btn>

        <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Orders</span>
        
      </v-btn>
        <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Cart</span>
        
      </v-btn>
      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Explore</span>
        
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
#appPage{
  background-color: bisque;
}
</style>
