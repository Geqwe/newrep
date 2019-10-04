<template>
    <v-app id="inspire" dark>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-bottom justify-center>
                    <v-flex xs3 sm3 md3 lg3 xl3>
                        <v-card class="elevation-24">
                            <v-toolbar dark color="success">
                                <v-toolbar-title>Login</v-toolbar-title>
                            </v-toolbar>
                            <v-card-text>
                                <v-form>
                                    <v-text-field prepend-icon="person" type="text" name="username" v-model="input.username" placeholder="Username(Nikos)" />
                                    <v-text-field prepend-icon="lock" type="password" name="password" v-model="input.password" placeholder="Password(Akelo)" />
                                </v-form>
                            </v-card-text>
                            <v-card-actions>
                                <v-btn color="success" @click="login()">Login</v-btn>
                                <v-btn text small flat depressed @click="gotoReg()">Register</v-btn>
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
    name: 'Login',
    data() {
        return {
            input: {
                username: "",
                password: ""
            }
        }
    },
    methods: {
        login() {
            if(this.input.username != "" && this.input.password != "") {
                if(this.input.username == "Nikos" && this.input.password == "Akelo") {
                    this.$emit("authenticated", true);
                    this.$router.replace({ name: "homepage"});
                }
                else {
                    console.log("The username and / or password is incorrect");
                }
            }
            else {
                console.log("A username and a password must be present");
            }
        },
        gotoReg() {
            this.$router.replace({ name: "register"});
        }
    }
}
</script>
