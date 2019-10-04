<template>
  <v-app id="inspire" dark color="primary">
    <!-- <v-navigation-drawer dark floating fixed app width="200"> -->
      <v-toolbar dark app fixed color="success">
        <v-toolbar-title style="width: 180px" class="ml-5">Delivery Service</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn flat small dark @click="gotoHome()">Home</v-btn>
        <v-btn flat small dark @click="gotoLog()">Login</v-btn>
        <v-btn flat small dark @click="gotoReg()">Register</v-btn>
        <v-btn v-show="authenticated" flat small dark @click="logout()">Logout</v-btn>
      </v-toolbar>
      <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>Logout</router-link>
    <!-- </v-navigation-drawer> -->
    <router-view @authenticated="setAuthenticated" />
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      authenticated:false,
      mockAccount: {
        username: "Nikos",
        password: "Akelo"
      }
    }
  },
  mounted() {
    if(!this.authenticated) {
      this.$router.replace({ name: "login"});
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
    gotoLog() {
      this.$router.replace({name: "login"});
    },
    gotoReg() {
      this.$router.replace({ name: "register"});
    },
    gotoHome() {
      this.$router.replace({ name: "homepage"});
    }
  }
}
</script>

