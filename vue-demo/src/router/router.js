import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/Home.vue"
import news from "@/components/News.vue"
import sign from "@/components/Sign.vue"
import users from "@/components/Users.vue"

const routes = [
    { path: '*', component:home},
    { path: '/home', component: home, },
    { path: '/news', component: news, },
    { path: '/sign', component: sign, },
    { path: '/users', component: users, },
]

Vue.use(Router)
export default new Router({
    mode: 'hash',
    routes
});