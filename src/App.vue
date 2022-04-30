<template>
  <v-app>
  
    <v-app-bar
      app
      color="primary"
    >
      <div class="d-flex align-center">
        <h1>Navigation Tab</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href=""
        target="_blank"
        text
      >
        <span class="mr-2">Explore</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-card
      color="secondary">
      <router-view/>
      </v-card>
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

</style>
