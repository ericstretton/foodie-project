<template>
    <v-container>
        <h1>This is where the restaurant browse stuff goes</h1>
        <ViewRestaurant/>
        <ViewRestaurant/>
        <ViewRestaurant/>
    </v-container>
</template>

<script>
import ViewRestaurant from './ViewRestaurant.vue'
    export default {
  components: { ViewRestaurant },
        name : "ExploreHome"
    }
</script>

<style lang="scss" scoped>

</style>