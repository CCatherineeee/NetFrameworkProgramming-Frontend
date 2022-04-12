<template>
  <div style="height: 120px;background-color: #252F3F" >
        <el-row style="height: 70%;margin-right: 30px;margin-left: 30px" >
          <el-col :span="2" style="margin-top: 30px;">
            <h1 style="font-size: large;color: white;font-family: 'Franklin Gothic Medium Cond';text-shadow:3px 3px 3px rgba(229,229,229,0.71);">HandyShare</h1>
          </el-col>
          <el-col :span="20" style="margin-top: 30px;">
            <input
                class="search-input"
                placeholder="请输入内容"
                type="text"
                v-model="searchInput"/>
            <!--  style="border-color: #EF4444" -->

            <el-button type="primary" style="background-color:#ee6400;border-color: #ee6400">搜索</el-button>
          </el-col>
          <el-col :span="1" style="margin-top: 30px;">
            <el-button type="text" size="large">Sign In</el-button>
          </el-col>
          <el-col :span="1" style="margin-top: 30px;">
            <el-button type="text" size="large">Sign In</el-button>
          </el-col>
        </el-row>
    <el-row style="height: 30%">
      <ul class="tabWraps " style="margin-right: 30px;margin-left: 30px;">
        <li>首页</li>
        <li>商店</li>
        <li>专题</li>
        <li>活动</li>
        <li>
          <el-dropdown trigger="hover">
            <span style="color: white">
              教程分类
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
                <el-dropdown-item :icon="CirclePlusFilled">
                  Action 2
                </el-dropdown-item>
                <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
                <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
                <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </li>
      </ul>

    </el-row>
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
.search-input{
  width: 90%;
  margin-right: 10px;
  height: 60%;
  border-radius: 20px;
  margin-inside: 20px;
  border: solid rgba(50,50,50,0.71);
  padding-left:20px;

}
/*:-moz-placeholder {*/
/*  color: white;*/
/*}*/

/*::-moz-placeholder {*/
/*  color: white;*/
/*}*/

/*::-webkit-input-placeholder {*/
/*  color: white;*/
/*}*/

/*:-ms-input-placeholder {*/
/*  color: white;*/
/*}*/
.tabWraps{
  font-size: 0;
  position:relative;
  width: 100%;
  padding: 4px 14px;

}
.tabWraps li{
  width: 10%;
  text-align:center;
  font-size: 14px;
  font-family: SourceHanSansCN-Regular,SourceHanSansCN,serif;
  font-weight: 400;
  display:inline-block;
  transition-property: all;
  transition-duration: 0.5s;
  color: white;
}
.tabWraps li:hover{
  border-bottom: white;
  border-style: solid;
  cursor: pointer;
}


</style>
