<template>
  <div  style="margin-top: 10px;margin-left: 80px">
    <el-col style="background-color: #252F3F;border-radius: 10px;width: 600px">
      <div style="padding: 40px;color: #d9d9d9">
        <el-menu
            :default-active="activate"
            class="el-menu-demo"
            mode="horizontal"
            background-color="#252F3F"
            text-color="#fff"
            router
            active-text-color="#ffd04b">
          <el-menu-item index="/userHome/profile">
            <span>个人信息</span>
          </el-menu-item>

          <el-menu-item index="/userHome/resetPassword">
            <span>重置密码</span>
          </el-menu-item>
        </el-menu>

        <router-view></router-view>
      </div>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "profileHome",
  data(){
    return{
      activate:null
    }
  },
  mounted() {
    this.activate = this.$route.path
    console.log(this.activate.path)
  }
}
</script>

<style scoped>

</style>
