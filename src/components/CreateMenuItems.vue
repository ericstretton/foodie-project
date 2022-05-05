<template>
    <v-container>
        <h1>Create your New Item Here!</h1>
        <v-form>
        <v-container>
            <v-row>
            <v-col
            cols="10"
            sm="6">
            <v-text-field
                v-model="name"
                label="Item Name"
                outlined>
            </v-text-field>
            <v-text-field
                v-model="description"
                label="Description"
                outlined>
            </v-text-field>
            <v-text-field
                v-model="price"
                label="Price"
                outlined>
            </v-text-field>
            <v-text-field
                v-model="imageUrl"
                label="Item Image (Url)"
                outlined>
            </v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleCreateMenuItem">Create Item</v-btn>
    </v-container>
</template>

<script>
import { mapActions } from 'pinia'
import { useMainStore } from '@/stores/main'
    export default {
        name : "CreateMenuItems",
        data : ()=> ({
            name: '',
            description: '',
            price: '',
            imageUrl: undefined
        }),
        methods: {
            ...mapActions(useMainStore, ['createMenuItem']),
            handleCreateMenuItem() {
                this.createMenuItem(this.name, this.description, this.price, this.imageUrl)
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>