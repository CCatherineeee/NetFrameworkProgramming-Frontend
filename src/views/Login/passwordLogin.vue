<template>
  <el-container class="background">
    <el-header class="login-header"></el-header>
    <el-main style="text-align: center;">
      <el-row type="flex" justify="center" align="middle" style="height: 100%;">
        <div class="login-form-back">
          <div style="margin: 30px 30px 30px 30px;width: 400px">
            <el-form
                label-position="top"
                label-width="120px"
                :model="loginForm"
                :rules="rules">
              <el-form-item label="用户名" prop="fakeName">
                <el-input v-model="loginForm.fakeName" size="large" clearable>
                </el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="loginForm.password" size="large"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="text" @click="jump('/phone-login')">忘记密码</el-button>
                <el-button type="text" @click="jump('/phone-login')">忘记密码</el-button>

              </el-form-item>
              <el-form-item>
                <el-button type="primary" class="button-style" @click="login()">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </div>

      </el-row>
    </el-main>
  </el-container>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",

  data(){
    return{
      loginForm:{
        fakeName:"",
        password:""
      },
      rules:{
        fakeName:[
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
      }
    }
  },
  methods:{
    jump(value){
      this.$router.push({path:value})
    },
    async login(){
      await axios.post("/api/Users/passwordLogin",{
        "Name":this.loginForm.fakeName,
        "Password":this.loginForm.password
      },{
        headers: {'Content-Type': 'application/json'} //加上这个
      }).then(res=>{
        if(res.code === 200) {
          localStorage.setItem("id",res.data)
          this.jump("/home")
        }
        else{
          this.$message.error(res.msg)
        }
      }).catch(err=>{
        this.$message.error("网络堵塞")
      })
    }
  }
}
</script>

<style scoped>
.button-style{
  width:100%;
  height:40px;
  margin-bottom:30px;
  background-color: cornflowerblue;
}
.login-form-back{
  border-color: white;
  border-style: solid;
  border-width: 2px;
  border-radius: 30px;
  box-shadow: 4px 4px 5px lightgray;
  background-color: rgba(255, 255, 255, 0.5);
}
.login-header{
  box-shadow: 4px 4px 5px lightgray;
  height: 60px;
}
.background{
  background-image: url("../../assets/bg.jpg");
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height: 800px;

}
</style>
