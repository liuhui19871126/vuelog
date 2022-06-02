<template>
  <div>
    <h1>NEWS</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="用户管理" name="1"
        ><span slot="label"><i class="el-icon-date">用户管理</i></span
        >用户管理1</el-tab-pane
      >
      <el-tab-pane label="配置管理" name="2">配置管理2</el-tab-pane>
      <el-tab-pane label="角色管理" name="3">角色管理3</el-tab-pane>
      <el-tab-pane label="定时任务补偿" name="4">
        <el-row>
          <el-col :span="4">
            <el-button type="primary" @click="getCity">获取城市</el-button>
            当前城市：[{{ this.city }}] -- 城市ID:[{{ this.cityid }}]
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  //props: ["newid"],
  data() {
    return {
      activeName: "1",
      city: "",
      cityid: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    getCity() {
      let getcityurl = "https://geoapi.qweather.com/v2/city/lookup?key=26b843e7e1ae48be9bfdfc572abdc61c&location=haiyang";
      this.axios.get(getcityurl).then((response) => {
        let res = response.data;
        this.cityid = res.location[0].id;
        this.city = res.location[0].name;
        console.log(res)
      });
      let getwetherurl = "https://devapi.qweather.com/v7/weather/now?key=26b843e7e1ae48be9bfdfc572abdc61c&location="+this.cityid;
      this.$http.get(getwetherurl).then((response) => {
        console.info(response.data)
      });
    },
  },
};
</script>