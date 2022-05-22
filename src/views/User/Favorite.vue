<template>

  <div  style="margin-top: 10px;margin-left: 20px">
    <div style="margin-top: 20px;">
      <div class="grid grid-cols-3 gap-4" >
        <div v-for="(item,index) in itmList" :key="index">
          <el-card shadow="hover" class="card" style="border-width: medium">
            <img :src="item.src" style="width: 100%;border-radius: 10px;margin-bottom: 10px" />
            <div>
              <el-button type="text" size="large"><b><p style="font-size: medium">{{item.title}}</p></b></el-button>
              <p><b>{{item.author}}</b> in {{item.lable}}</p>
            </div>
          </el-card>
        </div>
      </div>
      <div style="margin-top: 20px">
        <el-pagination layout="prev, pager, next" :total="50" background></el-pagination>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "Favorite",
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
      ]
    }
  }
}
</script>

<style scoped>

</style>
