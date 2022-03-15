<template>
  <div class="container-back">
    <el-container>
      <el-header class="login-header">
        <home-header></home-header>
      </el-header>
      <div style="background: #ee6400;">
        <img src="../assets/header.jpg"/>
      </div>
      <home-card></home-card>
      <el-divider></el-divider>
      <div class="mx-auto">
        <p class="italic">See personalized recommendations</p>
        <div>
          <el-button style="background-color: #facd45;text-align: center;width: 40%"><b>Sign In</b></el-button>
        </div>
      </div>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/Home/HomeHeader";
import HomeCard from "@/components/Home/HomeCard";
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCard
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
  margin: 0px 0px 30px 0px;
  background-color: #1F2937;

}
.container-back{
  height: 900px;
}
img {
  max-width: 50%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
.main-back{
  background-image: linear-gradient(to bottom, #ee6400, white);
}
</style>
