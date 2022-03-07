<template>
  <div style="margin: 30px 30px 30px 30px;width: 400px">
    <el-form
        label-position="top"
        label-width="120px"
        :model="loginForm"
        :rules="rules"
    >
      <el-form-item label="电话号码" prop="phoneNumber">
        <el-input v-model="loginForm.phoneNumber" size="large" clearable>
          <template #prepend>+86</template>
        </el-input>
      </el-form-item>
      <transition name="el-zoom-in-center">
        <el-form-item v-show="sendVerification === false" >
          <el-button type="primary" class="button-style" @click="getVerification">获取验证码</el-button>
        </el-form-item>
      </transition>
      <el-form-item label="验证码" v-show="sendVerification === true">
        <el-input v-model="loginForm.verification" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-show="sendVerification === true" type="primary" class="button-style" @click="toNextStep">验证</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: "phoneVerification",
  data(){
    return{
      loginForm:{
        phoneNumber: "",
        verification:"",
      },
      rules:{
        phoneNumber:[
          { required: true, message: "请输入正确的电话号码", trigger: "blur" },
          { min: 11, max: 11, message: "请输入正确的电话号码", trigger: "blur" },
          {pattern: /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/,message: "请输入正确的电话号码",}
        ],
      },
      sendVerification:false,
    }
  },
  methods:{
    getVerification(){
      this.sendVerification = true;
    },
    toNextStep:function (){
      this.$emit("toNextStep",2)
    }
  },
}
</script>

<style scoped>
.button-style{
  width:100%;
  height:40px;
  margin-bottom:30px;
}
</style>
