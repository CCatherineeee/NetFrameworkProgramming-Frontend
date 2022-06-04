<template>
  <div  style="margin-top: 20px;">
        <el-form :model="form" style="width: 100%;margin-top: 20px">
          <el-form-item style="margin-left: 100px;width: 200px;height: 200px">
            <el-upload
                class="avatar-uploader"
                action="/api/Users/UploadPic"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <img v-if="form.avatarUrl" :src="form.avatarUrl" style="width: 200px;height: 200px">
              <el-icon v-else style="width: 200px;height: 200px"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
            <el-form-item style="width: 100%;color:#d9d9d9;">
              <el-row style="width: 100%">
                <el-col :span="4">
                  <p>昵称</p>
                </el-col>
                <el-col :span="20">
                  <el-input style="width: 100%;border-radius: 10px" v-model="form.name" />
                </el-col>
              </el-row>
            </el-form-item>

          <el-form-item style="width: 100%;color:#d9d9d9;">
            <el-row style="width: 100%">
              <el-col :span="4">
                <p>邮箱</p>
              </el-col>
              <el-col :span="20">
                {{form.email}}
              </el-col>
            </el-row>
          </el-form-item>

            <el-form-item style="width: 100%;color:#d9d9d9;margin-top: 30px">
              <el-row style="width: 100%">
                <el-col :span="4">
                  <p>个人简介</p>
                </el-col>
                <el-col :span="20">
                  <textarea style="width: 100%;border-radius: 10px;color: #252F3F;padding: 10px"  v-model="form.description" />
                </el-col>
              </el-row>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" style="background-color: #409EFF" @click="setData">修改</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
import {Plus} from "@element-plus/icons";
import axios from "axios";

export default {
  name: "Profile",
  components:{
    Plus
  },
  data(){
    return{
      form:{
        name:"",
        email:"2870375520@qq.com",
        description:"",
        imageUrl:""
      }
    }
  },
  methods:{
    async getData(){
      await axios.get('api/Users/getById',{
        params: {
          "id": localStorage.getItem("id")
        }
      }).then(res=>{
        console.log(res)
        this.form = res.data
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")

      })
    },
    async setData(){
      await axios.post('api/Users/setProfile',{
        "Id":localStorage.getItem("id"),
        "name":this.form.name,
        "picUrl":this.form.avatarUrl,
        "description":this.form.description
      }).then(res=>{
        console.log(res)
        if(res.code ===200){
          this.$message.success(res.msg)
        }
        else{
          this.$message.error(res.msg)
          this.$router.push("/")
        }
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")

      })
      location.reload()
    },
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.form.avatarUrl = res.data.url;
    },
    beforeAvatarUpload(file) {
      console.log(file.type)
      const isJPG = file.type === 'image/png' || file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 4;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 4MB!');
      }
      return isJPG && isLt2M;
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>

</style>
