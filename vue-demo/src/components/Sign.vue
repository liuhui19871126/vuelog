<template>
    <div>
        <el-row type="flex" class="row-bg">
            <el-col :span="12" :offset="6">
                <div class="grid-content bg-purple-light"><h2>Sign In</h2></div>
                <div>
                    <el-input placeholder="please input user name" v-model="uName" suffix-icon="el-icon-user-solid" clearable></el-input>
                    <el-input placeholder="please input user pass" v-model="uPass" show-password clearable></el-input>
                    <el-button type="primary">Login</el-button>
                    <el-button type="primary" @click="goHome()">Go Home</el-button>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    data(){
        return {
            uName :'',
            uPass :''
        }
    },
    methods:{
        goHome(){
            let home = "hm"
            this.$router.replace(`${home}`);
        }
    }
}
</script>
<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>