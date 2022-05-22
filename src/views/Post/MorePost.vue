<template>
  <div class="container-back">
    <el-affix :offset="0">
      <div class="login-header  " style="width: 100%" >
        <home-header></home-header>
      </div>
    </el-affix>
    <div class="main-back">
      <el-tabs tab-position="left"  class="demo-tabs">
        <el-tab-pane label="🎁 所有">
          <div class="main-back">
            <div class="grid grid-cols-4 md:grid-rows-2 gap-4" >
              <div v-for="(item,index) in itmList" :key="index">
                <el-card shadow="hover" class="card">
                  <img :src="item.src" style="width: 100%;border-radius: 10px;margin-bottom: 10px" />
                  <div>
                    <el-button type="text" size="large"><b><p style="font-size: medium">{{item.title}}</p></b></el-button>
                    <p><b>{{item.author}}</b> in {{item.lable}}</p>
                  </div>
                </el-card>
              </div>
            </div>
            <el-pagination layout="prev, pager, next" :total="1000" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="🧶 编织">Config</el-tab-pane>
        <el-tab-pane label="👓 饰品">Role</el-tab-pane>
        <el-tab-pane label="🎗 布艺">Task</el-tab-pane>
        <el-tab-pane label="🎫 纸艺">Config</el-tab-pane>
        <el-tab-pane label="🖼 手绘">Config</el-tab-pane>
        <el-tab-pane label="🐏 羊毛毡" >User</el-tab-pane>
        <el-tab-pane label="🍃 旧物改造">Role</el-tab-pane>
        <el-tab-pane label="⚱ 粘土陶土">Task</el-tab-pane>
        <el-tab-pane label="🗿 雕塑雕刻">Role</el-tab-pane>
      </el-tabs>

    </div>
  </div>
</template>

<script>
import HomeHeader from "../../components/Home/HomeHeader";

export default {
  name: "MorePost",
  components:{
    HomeHeader
  },
  data(){
    return{
      itmList:[
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../../assets/img/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../../assets/img/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg")
        },
        {
          src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg")
        },
        {
          src:require("../../assets/img/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg")
        },
        {
          src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg")
        }
      ]
    }
  }
}
</script>

<style>

</style>
