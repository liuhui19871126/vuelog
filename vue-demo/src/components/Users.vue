<template>
  <div>
    <h1>USERS</h1>
    <div>uid-props: {{a}}|{{b}}| uid-params:{{$route.params.uId}}</div>
    <hr>
    <router-link to="/users/123/profile/pp2">profile</router-link> |
    <router-link to="/users/666/posts/pt2">posts</router-link>
    <router-view></router-view>
    
    <!-- <ul>
        <li><router-link to="/users/userAdd">新增用户</router-link></li>
        <li><router-link to="/users/userList">用户列表</router-link></li>
    </ul>
    <router-view></router-view>
    <button @click="gotoHome">go to home</button> -->
  </div>
</template>

<script>
    export default{
      props:["a","b"],
        data(){
            return {
                
            }
        },
        // methods:{
        //     gotoHome(){
        //         this.$router.push({path:'/news',query:{ui:123}})
        //     }
        // }
        // mouted(){
        //   this.data['uid'] = this.$route.param.uid
        // }
    }
</script>