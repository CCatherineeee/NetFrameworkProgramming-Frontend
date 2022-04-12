<template>
  <el-container class="main-back">
    <el-main>
      <div class="grid grid-cols-5 md:grid-rows-2 gap-4" >
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
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "HomeCard",
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

<style scoped>
.card{
  border-style: solid;
  border-width: thin;
  border-color: #252F3F;

}

</style>
