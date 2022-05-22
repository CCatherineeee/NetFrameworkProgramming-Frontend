<template>
  <div  style="margin-top: 20px;">
        <el-form :model="form" style="width: 100%;margin-top: 20px">
          <el-form-item style="margin-left: 100px">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
          </el-form-item>
            <el-form-item style="width: 100%;color:#d9d9d9;">
              <el-row style="width: 100%">
                <el-col :span="4">
                  <p>昵称</p>
                </el-col>
                <el-col :span="20">
                  <input style="width: 100%;border-radius: 10px" v-model="form.name" />
                </el-col>
              </el-row>
            </el-form-item>

            <el-form-item style="width: 100%;color:#d9d9d9;margin-top: 30px">
              <el-row style="width: 100%">
                <el-col :span="4">
                  <p>个人简介</p>
                </el-col>
                <el-col :span="20">
                  <textarea style="width: 100%;border-radius: 10px"  v-model="form.description" />
                </el-col>
              </el-row>
            </el-form-item>
          <el-form-item>
            <el-button type="primary" style="background-color: #409EFF">修改</el-button>
          </el-form-item>
        </el-form>
  </div>
</template>

<script>
import {Plus} from "@element-plus/icons";

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
  }
}
</script>

<style scoped>

</style>
