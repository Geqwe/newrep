import Vue from 'vue'
import Router from 'vue-router'
import LoginComponent from "./views/login.vue"
import HomepageComponent from "./views/homepage.vue"
import RegisterComponent from "./views/register.vue"

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: {
                name:"login"
            }
        },
        {
            path: "/login",
            name:"login",
            component: LoginComponent
        },
        {
            path: "/homepage",
            name:"homepage",
            component: HomepageComponent,
            meta: { requiresAuth: true }
        },
        {
            path: "/register",
            name:"register",
            component: RegisterComponent
        }
    ]
})