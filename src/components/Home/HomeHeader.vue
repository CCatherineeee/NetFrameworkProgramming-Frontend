<template>
  <div>
    <el-container>
      <el-aside style="width: 10%;">
        <img src="../../assets/logo.png" style="width:100px">
      </el-aside>
      <el-main>
          <el-input
              style="width: 80%;margin-right: 10px"
              placeholder="请输入内容"
              v-model="searchInput">
            <!--  style="border-color: #EF4444" -->
            <template #prepend>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>

          <el-button type="primary" style="background-color:#ee6400;border-color: #ee6400">搜索</el-button>
      </el-main>
    </el-container>
  </div>
</template>

<script>

import { Search } from '@element-plus/icons-vue'

export default {
  name: "HomeHeader",
  components:{
    Search,
  },
  data(){
    return{
      searchInput:"",
    }
  }
}
</script>

<style scoped>

</style>
