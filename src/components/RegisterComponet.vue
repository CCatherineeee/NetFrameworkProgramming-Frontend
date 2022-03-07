<template>
  <div class="login-form-back">
    <el-steps :active="activeStep" align-center style="margin: 30px 30px 30px 30px;">
      <el-step title="验证手机号"></el-step>
      <el-step title="填写账号信息"></el-step>
      <el-step title="注册成功"></el-step>
    </el-steps>
    <phoneVerification v-if="activeStep === 1" v-on:toNextStep="next($event)"></phoneVerification>
    <fillUserInformation v-if="activeStep === 2" v-on:toNextStep="next($event)"></fillUserInformation>
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
    }
  },
  methods:{
    next(msg){
      this.activeStep = msg;
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
