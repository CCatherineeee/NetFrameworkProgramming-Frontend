<template>
  <el-container>
    <el-header class="login-header"></el-header>
    <el-main style="text-align: center;">
        <el-row type="flex" justify="center" align="middle" style="height: 100%;">
          <Register-Componet></Register-Componet>
        </el-row>
    </el-main>
  </el-container>

</template>

<script>
import RegisterComponet from "../../components/RegisterComponet";
export default {
  name: "Register",
  components: {RegisterComponet},
  data(){
    return{
    }
  }
}
</script>

<style scoped>
.login-header{
  box-shadow: 4px 4px 5px lightgray;
  height: 60px;
}
</style>
