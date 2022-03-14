<template>
  <div style="margin: 30px 30px 30px 30px;width: 400px">
    <el-form
        label-position="top"
        label-width="120px"
        :model="informationForm"
        :rules="rules"
    >
      <el-form-item label="用户名" prop="fakeName">
        <el-input v-model="informationForm.fakeName" size="large" clearable>
        </el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="informationForm.password" size="large"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="verifyPassword">
        <el-input type="password" v-model="informationForm.verifyPassword" size="large"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="button-style" @click="toNextStep">提交</el-button>
      </el-form-item>
    </el-form>
  </div>

</template>

<script>
export default {
  name: "fillUserInformation",
  data(){
    let checkPwd2 = ((rule,value,callback)=>{
      if(value.trim().length===0){
        callback(new Error("请确认密码不能为空"));
      }else if(value !== this.informationForm.password){
        callback(new Error("2次密码不一致"));
      }else{
        callback();
      }
    })
    return{
      informationForm:{
        fakeName:"",
        password:"",
        verifyPassword:""

      },
      rules:{
        fakeName:[
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password:[
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        verifyPassword:[
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator:checkPwd2,trigger:"blur"}
        ],
      },
    }
  },
  methods:{
    toNextStep:function (){
      this.$emit("toNextStep",3)
    },
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
</style>
