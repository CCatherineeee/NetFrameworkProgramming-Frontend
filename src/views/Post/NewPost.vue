<template>
  <div style="margin-bottom: 60px">
    <el-affix :offset="0">
      <div class="login-header  " style="width: 100%" >
        <home-header></home-header>
      </div>
    </el-affix>
    <div class="main-back">
      <h1 style="margin: 10px;font-size: x-large;font-family: 黑体"><b>发布你的手工教程</b></h1>
      <div  style="margin: 15px">
        <el-row>
          <el-col :span="8"></el-col>
          <el-col :span="8" style="margin-bottom: 30px">
            <el-upload
                class="avatar-uploader"
                action="/api/Posts/UploadHeaderPic"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
            </el-upload>
            <h1 style="margin-left: 80px;margin-right: 80px">请上传教程封面图</h1>
          </el-col>
          <el-col :span="8"></el-col>

        </el-row>
        <el-row>
          <el-col :span="1">
            <h1 style="font-size: large"><b>标题</b></h1>
          </el-col>
          <el-col :span="21">
            <el-input style="width: 100%" v-model="title"></el-input>
          </el-col>
        </el-row>
      </div>
      <div style="border: 1px solid #ccc;margin: 10px">
        <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
        />
        <Editor
            style="height: 500px; overflow-y: hidden;"
            v-model="valueHtml"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
            @onChange="handleChange"
        />
      </div>

      <div id="tags" style="margin: 10px">
        <h3 style="margin-bottom: 10px">选择你的标签</h3>
        <el-checkbox-group v-model="checkboxGroup1" size="small">
          <el-row>
            <div v-for="(item,index) in labelList" :key="index">
              <el-checkbox :label="item.label" border style="width: 100px;margin-left: 10px;margin-right: 10px"/>
            </div>
          </el-row>
        </el-checkbox-group>
      </div>
      <div style="margin-left: 10px;margin-top: 40px">
        <el-button class="button-post-style" style="  background-color: #409EFFFF;color: white;width: 200px" @click="submit()"> 提交 </el-button>
      </div>
    </div>
  </div>
</template>

<script>

import HomeHeader from "@/components/Home/HomeHeader";

import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar,IEditorConfig } from '@wangeditor/editor-for-vue'

import {Plus} from "@element-plus/icons";
import axios from "axios";

let content;
export default {
  name: "NewPost",
  components:{HomeHeader,Editor, Toolbar, Plus},
  data(){
    return{
      imageUrl:"",
      title:"",
      checkboxGroup1:[],
      labelList:[
        {
          label:"🐏 羊毛毡",
        },
        {
          label:"🧶 编织",
        },
        {
          label:"👓 饰品",
        },
        {
          label:"🎗 布艺",
        },
        {
          label:"🎫 纸艺",
        },
        {
          label:"🍃 旧物改造",
        },
        {
          label:"⚱ 粘土陶土",
        },
        {
          label:"🖼 手绘",

        },
        {
          label:"🗿 雕塑雕刻",
        },
      ],
      content:""
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      console.log(res)
      this.imageUrl = res.data[0];
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/png' || file.type === 'image/jpg';
      const isLt2M = file.size / 1024 / 1024 < 4;

      if (!isJPG) {
        this.$message.error('上传图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 4MB!');
      }
      return isJPG && isLt2M;
    },
    async submit(){

      console.log(Array.from(this.checkboxGroup1) )
      await axios.post("/api/Posts/addPost",{
        "title":this.title,
        "content":content,
        "pic_url":this.imageUrl,
        "user_id":localStorage.getItem("id"),
        "labelList":Array.from(this.checkboxGroup1)
      }).then(res=>{
        if(res.code === 200){
          this.$message.success(res.msg)
        }
        else{
          this.$message.error(res.msg)
        }
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")
      })
    }
  },
  setup() {
    // 编辑器实例，必须用 shallowRef
    const editorRef = shallowRef()

    // 内容 HTML
    const valueHtml = ref('<p>⛏<strong>主要材料：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">材料名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要工具：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">工具名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要步骤：</strong></p>')

    // 模拟 ajax 异步获取内容
    onMounted(() => {
      setTimeout(() => {
        valueHtml.value = '<p>⛏<strong>主要材料：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">材料名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要工具：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">工具名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要步骤：</strong></p>'
      }, 1500)
    })

    const toolbarConfig = {}
    const editorConfig = { MENU_CONF: {} }
    editorConfig.MENU_CONF['uploadImage'] = {
      server: '/api/Posts/UploadPic',
      fieldName: 'file',

    }

    // 组件销毁时，也及时销毁编辑器
    onBeforeUnmount(() => {
      const editor = editorRef.value
      if (editor == null) return
      editor.destroy()
    })

    const handleCreated = (editor) => {
      editorRef.value = editor // 记录 editor 实例，重要！
    }

    const handleChange = ()=>{
      content = valueHtml.value
    }
    // todo: 配置图片上传地址

    return {
      editorRef,
      valueHtml,
      mode: 'default', // 或 'simple'
      toolbarConfig,
      editorConfig,
      handleCreated,
      handleChange
    };
  }

}
</script>

<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 300px;
  height: 200px;
  text-align: center;
}
.button-post-style{
  background-color: #409EFFFF;
  color: white;
}
</style>
