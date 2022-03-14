<template>
  <div class="container-back">
    <el-container>
      <el-header class="login-header">
        <home-header></home-header>
      </el-header>
      <el-container style="margin-left: 10px;margin-right: 10px">
        <el-aside>
          <el-card shadow="always"> Always </el-card>
        </el-aside>
        <el-main>
          <el-card shadow="always">
          </el-card>
        </el-main>
        <el-aside>
          <el-card shadow="always"> Always </el-card>
        </el-aside>
      </el-container>

    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/Home/HomeHeader";
export default {
  name: 'Home',
  components: {
    HomeHeader
  },
  data(){
    return{
    }
  }
}
</script>
<style scoped>
.login-header{
  box-shadow: 4px 4px 5px lightgray;
  height: 100px;
  margin: 0px 30px 30px 10px;
  background: white;
}
.container-back{
  background: #f4f4f4;
  height: 900px;
}
</style>
