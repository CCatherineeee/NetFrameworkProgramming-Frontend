<template>
  <div>
    <HomeHeader class="login-header"></HomeHeader>
    <div>
      <el-container  style="margin-top: 10px;margin-left: 100px">
          <el-main>
            <el-row>
              <el-col :span="5" style="background-color: #252F3F;width: 200px;border-radius: 10px;height: 300px">
                <el-menu
                    :default-active="activate"
                    active-text-color="#ffd04b"
                    background-color="#252F3F"
                    class="el-menu-vertical-demo"
                    default-active="2"
                    text-color="#fff"
                    router
                    style="border-radius: 10px;margin-top: 10px;margin-bottom: 10px;">

                  <el-menu-item index="/userHome/profile">
                    <span style="padding-left: 20px;">个人资料</span>
                  </el-menu-item>

                  <el-menu-item index="/userHome/follow">
                    <span style="padding-left: 20px;">我的关注</span>
                  </el-menu-item>

                  <el-menu-item index="/userHome/favorite">
                    <span style="padding-left: 20px;">我的收藏</span>
                  </el-menu-item>

                  <el-menu-item index="/userHome/posts">
                    <span style="padding-left: 20px;">我的投稿</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
              <el-col :span="19">
                <router-view></router-view>
              </el-col>
            </el-row>
          </el-main>
      </el-container>
    </div>
  </div>

</template>

<script>
import {location} from  "@element-plus/icons-vue"
import HomeHeader from "@/components/Home/HomeHeader";
export default {
  name: 'userHome',
  components: {
    HomeHeader,
    location
  },
  data () {
    return {
      activate:""
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
