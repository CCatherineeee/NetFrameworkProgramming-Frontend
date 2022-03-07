<template>
  <el-container>
    <el-header class="login-header">
      <home-header></home-header>
    </el-header>
  </el-container>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/Home/HomeHeader";
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style scoped>
.login-header{
  box-shadow: 4px 4px 5px lightgray;
  height: 100px;
}
</style>
