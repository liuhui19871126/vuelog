<template>
  <div id="app">
    <router-link to="/home">to home</router-link> | 
    <router-link to="/news">to news</router-link> | 
    <router-link to="/users">to users</router-link> | 
    <router-link to="/sign">to sign in</router-link> | 
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
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
