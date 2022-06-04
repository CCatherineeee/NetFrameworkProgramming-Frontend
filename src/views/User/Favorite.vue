<template>

  <div  style="margin-top: 10px;margin-left: 20px">
    <el-collapse>
      <div v-for="(item,index) in itmList" :key="index">
        <el-collapse-item :name="index" :title="item.name">
          <div class="grid grid-cols-4 grid-row-2 gap-4" style="margin:10px">
            <div v-for="(itm,idx) in item.posts" :key="idx">
              <el-card shadow="hover" class="card" style="cursor: pointer">
                <img :src="itm.post.picUrl" style="border-radius: 10px" />
                <el-button type="text" style="text-align: center">{{itm.post.title}}</el-button>
                <el-row>
                  <div v-for="(it,i) in itm.post.postLabels" :key="i">
                    <div style="background: antiquewhite;padding: 5px;margin: 2px;border-radius: 10px;cursor: pointer;font-size: x-small">{{it.label}}</div>
                  </div>
                </el-row>
              </el-card>
            </div>
          </div>
        </el-collapse-item>
      </div>
    </el-collapse>

  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Favorite",
  data(){
    return{
      itmList:[]

    }
  },
  methods:{
    async getMy(){
      await axios.get("/api/Favorite/my",{
        params:{
          "id":localStorage.getItem("id")
        }
      }).then(res=>{
        console.log(res)
        this.itmList = res.data
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络错误！")
      })
    }
  },
  mounted() {
    this.getMy()
  }
}
</script>

<style scoped>

</style>
