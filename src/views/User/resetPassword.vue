<template>
  <div  style="margin-top: 20px;">
    <el-form :model="form" style="width: 100%;margin-top: 20px">
      <el-form-item style="width: 100%;color:#d9d9d9;">
        <el-row style="width: 100%">
          <el-col :span="4">
            <p>验证码</p>
          </el-col>
          <el-col :span="10">
            <input style="width: 100%;border-radius: 10px" v-model="form.verifyCode" />
          </el-col>
          <el-col :span="10">
            <el-button type="primary" style="background-color: #409EFF;margin-left: 10px"> 获取验证码 </el-button>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item style="width: 100%;color:#d9d9d9;margin-top: 30px">
        <el-row style="width: 100%">
          <el-col :span="4">
            <p>新密码</p>
          </el-col>
          <el-col :span="20">
            <input style="width: 100%;border-radius: 10px"  v-model="form.newPassword" />
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
export default {
  name: "resetPassword",
  data(){
    return{
      form:{
        verifyCode:"",
        newPassword:""
      }
    }
  }
}
</script>

<style scoped>

</style>
