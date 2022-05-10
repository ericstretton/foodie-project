<template>
    <v-container>
        <ShoppingCart/>
    </v-container>
</template>

<script>
import ShoppingCart from '@/components/userClient/ShoppingCart.vue'
    export default {
        name: "ShoppingCartView",
        components: {
            ShoppingCart
        }
    }
</script>

<style lang="scss" scoped>

</style>