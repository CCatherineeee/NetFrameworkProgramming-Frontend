<template>

  <div  style="margin-top: 10px;margin-left: 20px">
    <div style="margin-top: 20px;">
      <div class="grid grid-cols-3 gap-4" >
        <div v-for="(item,index) in itmList" :key="index">
          <el-card shadow="hover" class="card" style="border-width: thin">
            <img :src="item.picUrl" style="width: 100%;border-radius: 10px;margin-bottom: 10px" />
            <div>
              <el-button type="text" size="large"><b><p style="font-size: medium">{{item.title}}</p></b></el-button>
              <el-row>
                <div v-for="(itm,idx) in item.postLabels" :key="idx">
                  <div style="background: antiquewhite;padding: 5px;margin: 2px;border-radius: 10px;cursor: pointer;font-size: x-small">{{itm.label}}</div>

                </div>

              </el-row>
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
import axios from "axios";

export default {
  name: "Post",
  data(){
    return{
      itmList:[]
    }
  },
  methods:{
    async getData(){
      await axios.get("/api/Posts/getMyPost",{
        params:{
          "id":localStorage.getItem("id")
        }
      }).then(res=>{
        console.log(res)
        if(res.code !== 200){
          this.$message.error(res.msg)
        }
        this.itmList = res.data
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络阻塞！")
      })
    }

  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
