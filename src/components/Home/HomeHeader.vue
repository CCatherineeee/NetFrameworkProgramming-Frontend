<template>
  <div>
    <el-container>
      <el-aside style="width: 10%;background-color: gray">
        <img src="../../assets/logo.png" style="width:100px">
      </el-aside>
      <el-main>
        <el-row>
          <el-input
              placeholder="请输入内容"
              v-model="searchInput"
              style="border-color: #EF4444">
            <template #prepend>
              <el-icon class="el-input__icon"><search /></el-icon>
            </template>
          </el-input>

          <el-button type="primary" style="background-color: #EF4444;border-color: #EF4444">搜索</el-button>
        </el-row>
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
