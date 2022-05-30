<template>
  <div class="login-form-back">
    <el-steps :active="activeStep" align-center style="margin: 30px 30px 30px 30px;">
      <el-step title="验证邮箱"></el-step>
      <el-step title="填写账号信息"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>
    <phoneVerification v-if="activeStep === 1" @toNextStep="next"></phoneVerification>
    <fillUserInformation v-if="activeStep === 2" @toNextStep="next"></fillUserInformation>
    <success-register v-if="activeStep === 3"></success-register>
  </div>
</template>

<script>
import phoneVerification from "./Register/PhoneVerification";
import fillUserInformation from "./Register/FillUserInformation";
import successRegister from "./Register/SuccessRegister";
import axios from "axios";

export default {
  name: "LoginForm",
  components:{
    phoneVerification,
    fillUserInformation,
    successRegister
  },
  data(){
    return{
      activeStep:1,
      registerForm:{
        Email:"",
        FakeName:"",
        UserPwd:"",
      }
    }
  },
  methods:{
    async next(param1,param2){
      console.log(param1,param2)
      if(param1 === 2){
        this.registerForm.Email=param2.Email;
        this.registerForm.verification = param2.verification;
        console.log(this.registerForm);
        this.activeStep = param1;

      }
      else if(param1 === 3){
        this.registerForm.FakeName = param2.FakeName;
        this.registerForm.UserPwd = param2.UserPwd;
        await axios.post("/api/Users/register",{
          "Name":this.registerForm.FakeName,
          "Password":this.registerForm.UserPwd,
          "Email":this.registerForm.Email,
          "verifyCode":this.registerForm.verification
        },{
          headers: {'Content-Type': 'application/json'} //加上这个
        }).then(res=>{
          if(res.code === 200) {
            this.activeStep = param1;
          }
          else{
            this.$message.error(res.msg)
          }
        }).catch(err=>{
          this.$message.error("网络堵塞")
        })
      }
      else{
        console.log(this.registerForm);
      }
    }
  }
}
</script>

<style scoped>
.login-form-back{
  border-color: white;
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  box-shadow: 4px 4px 5px lightgray;
  background-color: rgba(255, 255, 255, 0.5);
}
</style>
