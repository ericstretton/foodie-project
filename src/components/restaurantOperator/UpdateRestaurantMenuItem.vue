<template>
    <v-container>
        <h1>Update Your Items</h1>
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
            <v-text-field
                v-model="menuId"
                label="Item Identification"
                outlined>
            </v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
        <v-btn @click="handleUpdateMenuItem">Update Item</v-btn>
    
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapActions} from 'pinia';

    export default {
        name: "UpdateRestaurantMenuItem",
        data: ()=> ({
            description: '',
            imageUrl: undefined, 
            menuId: '',
            name: '', 
            price: '', 
            
        }),
        methods: {
            ...mapActions(useMainStore, ['updateMenuItem']),
            handleUpdateMenuItem() {
                this.updateMenuItem(this.description, this.imageUrl, this.menuId, this.name, this.price, )
            }

        }
    }
</script>

<style lang="scss" scoped>

</style>