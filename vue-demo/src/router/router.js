import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/Home.vue"
import news from "@/components/News.vue"
import sign from "@/components/Sign.vue"
import users from "@/components/Users.vue"
import users1 from "@/components/Users1.vue"
import users2 from "@/components/Users2.vue"

import profile from "@/components/Profile.vue"
import posts from "@/components/Posts.vue"

const routes = [
    { path: '*', component: home },
    { path: '/home', component: home, name:"hm"},
    { path: '/news', component: news, },
    { path: '/sign', component: sign, },
    // { path: '/users/o/:lh', component: users1, },
    // { path: '/users/p/:LH', component: users2, },
    // { path: '/users-:afterUser(.*)', component: users2, },
    {
        path: '/users/:uId(\\d+)+',
        component: users,
        children: [
            { path: "profile/:profiles1", component: profile },
            { path: "posts/:posts1", component: posts },
        ],
        props:{a:"haha",b:"heihei"}
    },
]

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes
});