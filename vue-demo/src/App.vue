<template>
  <div id="app">
    <router-link to="/home">to home</router-link> | 
    <router-link to="/news?newid=5566">to news</router-link> | 
    <router-link to="/sign">to sign in</router-link> | 

    <router-link to="/users/1113">to users</router-link> | 

    <router-link to="/users/213/profile/pp1">Profile</router-link> |
    <router-link to="/users/213/posts/pt1">Posts</router-link> |
    <router-link to="/amapdemo">Amap</router-link> |
    <!-- <router-link to="/users-111/lh">to users2</router-link> |  -->
    <!-- <router-link to="/users/o/222">to users3</router-link> | 
    <router-link to="/users/p/333">to users4</router-link> |  -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
}
</script>

<style>
.aview{
  background: red;
}
.bview{
  background:blue
}
</style>
