<template>
  <div style="margin: 30px 30px 30px 30px;width: 400px">
    <el-form
        label-position="top"
        label-width="120px"
        :model="loginForm"
        :rules="rules"
    >
      <el-form-item label="邮箱" prop="Email">
        <el-input v-model="loginForm.Email" size="large" clearable>
        </el-input>
      </el-form-item>
      <transition name="el-zoom-in-center">
        <el-form-item v-show="sendVerification === false" >
          <el-button type="primary" class="button-style" @click="getVerification">获取验证码</el-button>
        </el-form-item>
      </transition>
      <el-form-item label="验证码" prop="verification" v-show="sendVerification === true">
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
        Email: "",
        verification:"",
      },
      rules:{
        Email: [
          { required: true, message: '请填写邮箱', trigger: 'blur' },
          { type: 'string',
            message: '邮箱格式不正确',
            trigger: 'blur',
            transform (value) {
              if (!/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)) {
                return true
              }else{
              }
            }
          },
          { type: 'string', message: '长度不能超过30位', trigger: 'blur', max: 30 }
        ],
        verification:[
          {required: true, message: '请填写验证码', trigger: 'blur'}
        ]
      },
      sendVerification:false,
    }
  },
  methods:{
    getVerification(){
      this.sendVerification = true;
    },
    toNextStep:function (){
      if(this.loginForm.Email === "" || this.loginForm.verification === "")
        return;
      if (!/^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(this.loginForm.Email)) {
        return;
      }

      this.$emit("toNextStep",2,this.loginForm)
    }
  },
}
</script>

<style scoped>
.button-style{
  width:100%;
  height:40px;
  margin-bottom:30px;
  background-color: cornflowerblue;

}
</style>
