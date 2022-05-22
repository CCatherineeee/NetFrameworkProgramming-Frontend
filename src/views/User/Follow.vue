<template>
  <div  style="margin-top: 10px;margin-left: 20px">
    <div style="margin-top: 20px;">
      <div class="grid grid-cols-4 gap-10" >
        <div v-for="(item,index) in userList" :key="index">
          <el-card shadow="hover" class="card" style="background-color: #252F3F;color: #d9d9d9">
            <img :src="item.src" style="width: 100%;border-radius: 10px;margin-bottom: 10px" />
            <div>
              <p><b>{{item.name}}</b></p>
              <p style="font-size: x-small;margin-top: 4px">{{item.description}}</p>
            </div>
            <div style="margin-top: 10px">
              <el-button type="primary" style="background-color: #409EFF" size="small">取消关注</el-button>
            </div>
          </el-card>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "Follow",
  data(){
    return{
      userList:[
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        },
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        },
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        },
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        },
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        },
        {
          src:require("../../assets/img/il_340x270.446882086_t1zg.png"),
          name:"this is a user",
          description:"i love handmake please follow me!",
          id:""
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
