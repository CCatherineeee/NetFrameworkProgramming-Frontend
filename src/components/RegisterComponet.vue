<template>
  <div class="login-form-back">
    <el-steps :active="activeStep" align-center style="margin: 30px 30px 30px 30px;">
      <el-step title="验证手机号"></el-step>
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
    next(param1,param2){
      console.log(param1,param2)
      this.activeStep = param1;
      if(param1 === 2){
        this.registerForm.Email=param2.Email;
        console.log(this.registerForm);
      }
      else if(param1 === 3){
        this.registerForm.FakeName = param2.FakeName;
        this.registerForm.UserPwd = param2.UserPwd;
        console.log(this.registerForm);
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
