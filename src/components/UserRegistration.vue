<template>
    <v-container>
        <h1>User Registration</h1>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6">
                <v-text-field
                    v-model="firstName"
                    label="First Name"
                    outlined
                ></v-text-field>
            </v-col>
            </v-row>
        </v-container>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        name: "UserRegistration"
    }
</script>

<style lang="scss" scoped>

</style>