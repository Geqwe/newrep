<template>
    <v-app id="inspire" dark>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-bottom justify-center>
                    <v-flex xs3 sm3 md3 lg3 xl3>
                        <v-card class="elevation-24">
                            <v-toolbar dark color="success">
                                <v-toolbar-title>Register</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="email" type="email" name="email" v-model="email" placeholder="Email" />
                                    <v-text-field prepend-icon="person" type="text" name="username" v-model="username" placeholder="Username" />
                                    <v-text-field prepend-icon="lock" type="password" name="password" v-model="password" placeholder="Password" />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" @click="register()">Register</v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            email: "",
            username: "",
            password: ""
        }
    },
    methods: {
        register() {
            if(this.email != "" && this.username != "" && this.password != "") {
                //post sto backend
            }
            else {
                console.log("An email, a username and a password must be present");
            }
        }
    }
}
</script>