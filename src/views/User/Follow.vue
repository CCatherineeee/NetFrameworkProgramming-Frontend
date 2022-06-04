<template>
  <div  style="margin-top: 10px;margin-left: 20px">
    <div style="margin-top: 20px;">
      <div class="grid grid-cols-4 gap-10" >
        <div v-for="(item,index) in userList" :key="index">
          <el-card shadow="hover" class="card" style="background-color: #252F3F;color: #d9d9d9">
            <img :src="item.avatarUrl" style="width: 100%;border-radius: 10px;margin-bottom: 10px" />
            <div>
              <p><b>{{item.name}}</b></p>
              <p style="font-size: x-small;margin-top: 4px">{{item.description}}</p>
            </div>
            <div style="margin-top: 10px">
              <el-button type="primary" style="background-color: #409EFF" size="small" @click="disfollow(item.userId)">取消关注</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Follow",
  data(){
    return{
      userList:[
      ]
    }
  },
  methods:{
    async getFollow(){
      await axios.get("/api/Users/getFollow",{
        params:{
          "id":localStorage.getItem("id")
        }
      }).then(res=>{
        if(res.code !== 200){
          this.$message.error(res.msg)
        }
        else{
          this.userList = res.data
        }
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")
      })
    },
    async disfollow(id){
      await axios.post("/api/Follow/disfollow",null,{
        params:{
          "uid":localStorage.getItem("id"),
          "toid":id
        }
      }).then(res=>{
        console.log(res)
        if(res.code === 200){
          this.$message.success(res.msg)
        }
        else{
          this.$message.error(res.msg)
        }
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")
      })
    }
  },
  mounted() {
    this.getFollow()
  }
}
</script>

<style scoped>

</style>
