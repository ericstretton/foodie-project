<template>
    <v-container>
    <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="10"
                sm="6">
            <v-text-field
                    v-model="menuId"
                    label="Menu Id"
                    outlined>
            </v-text-field>
            </v-col>
            </v-row>
        </v-container>
    </v-form>
        <v-btn @click="handleDeleteMenuItem">Delete Item</v-btn>
    </v-container>
</template>

<script>
import {useMainStore} from '@/stores/main.js';
import {mapActions} from 'pinia';
    export default {
        name: "RemoveRestaurantMenuItem",
        data: () =>({
            menuId: ''
        }),
        
        methods: {
            ...mapActions(useMainStore, ['deleteMenuItem']),
            handleDeleteMenuItem() { 
                this.deleteMenuItem(this.menuId)
            }
        },
       
    }
</script>

<style lang="scss" scoped>

</style>