<template>
  <div>
    <h1>USERS1</h1>
    <!-- <p>cal:{{count}}</p> -->
    <!-- <input @click="myFn()" type="button" value="add 1"/> -->
  </div>
</template>

<script>
// import { ref, onMounted } from "vue";
export default {
  // setup(props, context) {
  //   let count = ref(0);
  //   function myFn() {
  //     console.log("count computed");
  //     count.value += 1;
  //   }
  //   onMounted(() => console.log("component mounted!"));
  //   return { count, myFn };
  // },
  data() {
    return {
      uid: 123,
    };
  },
};
</script>