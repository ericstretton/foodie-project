<template>
    <v-container>
        <v-row  
            >
        <v-col
        md="10"
        lg="12">
            <RestaurantProfileInformation/>
                <v-row>
                    <v-col>
                        <v-btn>Update</v-btn>
                    </v-col>
                </v-row>
            
            <v-card
            width="50vw">
                <v-subheader>
                    <h1>Menu Information</h1>
                </v-subheader>
                <v-row>
                    <v-col>
                        <v-btn>View</v-btn>
                        <v-btn>Create</v-btn>
                        <v-btn>Update</v-btn>
                        <v-btn>Delete</v-btn>
                    </v-col>
                </v-row>
            </v-card>
            <ViewRestaurantMenuItems/>
            <CreateMenuItems/>
            <UpdateRestaurantMenuItem/>
            <RemoveRestaurantMenuItem/>
            <v-card
            width="50vw">
                <v-subheader>
                    <h1>Order Information</h1>
                </v-subheader>
                <v-row>
                    <v-col>
                        <v-btn>View Orders</v-btn>
                        <v-btn>Accept and Complete Orders</v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
        </v-row>
        
        
    </v-container>
</template>

<script>
import CreateMenuItems from '@/components/restaurantOperator/CreateMenuItems.vue'
import RestaurantProfileInformation from '@/components/restaurantOperator/RestaurantProfileInformation.vue'
import ViewRestaurantMenuItems from '@/components/ViewRestaurantMenuItems.vue'
import UpdateRestaurantMenuItem from '@/components/restaurantOperator/UpdateRestaurantMenuItem.vue'
import RemoveRestaurantMenuItem from './RemoveRestaurantMenuItem.vue'
    export default {
        name : "RestaurantProfile",
        components: {
                CreateMenuItems,
                RestaurantProfileInformation,
                ViewRestaurantMenuItems,
                UpdateRestaurantMenuItem,
                RemoveRestaurantMenuItem,

        }
    }
</script>

<style lang="scss" scoped>

</style>