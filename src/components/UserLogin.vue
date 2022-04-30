<template>
    <v-container>
        <h1>Please Log in </h1>
        <v-form>
        <v-container>
            <v-row>
            <v-col
                cols="12"
                sm="6">
                <v-text-field
                    v-model="username"
                    label="Username"
                    outlined
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    label="Password"
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
        name: "UserLogin",

    }
</script>

<style lang="scss" scoped>

</style>