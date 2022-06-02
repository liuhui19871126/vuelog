import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/Home.vue"
import news from "@/components/News.vue"
import sign from "@/components/Sign.vue"
import users from "@/components/Users.vue"
import users1 from "@/components/Users1.vue"
import users2 from "@/components/Users2.vue"
import amapdemo from "@/components/AmapDemo.vue"

import profile from "@/components/Profile.vue"
import posts from "@/components/Posts.vue"

const routes = [
    { path: '*', component: home },
    { path: '/home', component: home, name: "hm" },
    { path: '/news', component: news, props: route => ({ query: route.query.newid }) },
    { path: '/sign', component: sign, name:"sign"},

    {
        path: '/users/:uId(\\d+)+',
        component: users,
        children: [
            { path: "profile/:profiles1", component: profile },
            { path: "posts/:posts1", component: posts },
        ],
        props: { a: "haha", b: "heihei" }
    },
    { path: '/users/o/:lh', component: users1, },
    { path: '/amapdemo', component: amapdemo, name:"amapdemo"},
    // { path: '/users/p/:LH', component: users2, },
    // { path: '/users-:afterUser(.*)', component: users2, },
]

Vue.use(Router)
const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    console.log("to.name:" + to.name)
    console.log("to.fullPath:" + to.fullPath)
    console.log("to.hash:" + to.hash)
    console.log("to.path:" + to.path)
    console.log("to.redirectedFrom:" + to.redirectedFrom)
    console.log("to.meta:" + to.meta.listData)
    console.log("to.params:" + to.params+'')


    console.log("from.name:" + from.name)
    console.log("from.fullPath:" + from.fullPath)
    console.log("from.hash:" + from.hash)
    console.log("from.path:" + from.path)
    console.log("from.redirectedFrom:" + from.redirectedFrom)
    if(to.name==='hm') next({name:"sign"})
    next()
})

export default router