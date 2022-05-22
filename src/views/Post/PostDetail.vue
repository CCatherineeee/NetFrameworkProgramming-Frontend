<template>
  <div style="margin-bottom: 60px">
    <el-affix :offset="0">
      <div class="login-header  " style="width: 100%" >
        <home-header></home-header>
      </div>
    </el-affix>
    <div class="main-back">
      <el-row style="margin: 10px">
        <h1 style="font-size: xx-large;word-break:break-all" >【title】11111111111111111111111111111111111111111111111111111111111111</h1>
        <el-button style="background-color: #409EFF;color: white;margin: 10px 10px 10px 20px;" size="large">收藏</el-button>
      </el-row>
      <el-row>
        <div v-for="(item,index) in post.label " :key="index" class="label-style">
          <div >{{item}}</div>
        </div>
      </el-row>
      <el-row>
        <el-col :span="16">
          <div v-html="content" style="padding: 20px;"  class="detail"></div>
          <div style="margin: 40px 20px 20px;">
            <el-divider><b>评论区</b></el-divider>
          </div>
          <br />
          <div>
            <div v-for="(item,index) in post.comments" :key="index">
              <div class="detail" style="padding: 20px">
                <el-row>
                  <div style="margin-right: 30px">
                    {{item.fakeName}}
                  </div>
                  <div style="color: #8c939d">
                    {{item.create_time}}
                  </div>
                </el-row>
                <el-row style="margin-top: 10px">
                  <div style="word-break:break-all">
                    {{item.content}}
                  </div>
                </el-row>
              </div>
            </div>
          </div>

          <div>
            <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="50"
                class="mt-4"
            />
          </div>

          <div style="margin-top: 20px">
            <QuillEditor theme="snow" />
            <div style="margin-top: 20px">
              <el-button style="background-color: #409EFF;color: white;box-shadow: 1px 1px 3px #8c939d;"> 发表评论 </el-button>

            </div>
          </div>



        </el-col>
        <el-col :span="6" style="margin: 10px">
          <div style="padding: 20px"  class="detail">
            <el-row>
              <div style="font-size: large"><b>创建者：</b> Tester </div>
            </el-row>
            <br />
            <el-row><div style="font-size: medium">创建者的其他教程</div></el-row>
            <br />

            <div class="grid grid-cols-2 md:grid-rows-2 gap-4" style="margin-top: 20px;">
              <div v-for="(item,index) in post.user.srcList" :key="index">
                <img :src="item.src" style="width: 100%;border-radius: 10px;margin-bottom: 10px;cursor: pointer" />
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';

export default {
  name: "PostDetail",
  components:{
    HomeHeader,
    QuillEditor
  },
  data(){
    return{
      post:{
        post_id:"",
        content:"",
        label:[
          "⚱ 粘土陶土",
          "🖼 手绘",
        ],
        comments:[
          {
            user_id:1,
            fakeName:"test222",
            content:"jhkfaljds111111111111111111111111111111111111111111111111111111alkdjkaljdkljfldsjfaalkfjkldasjfalkdsfjalskfdjladsjfkdafs",
            create_time:"2022-2-1 12:39"
          },
          {
            user_id:1,
            fakeName:"test222",
            content:"jhkfaljdsalkdjkaljdkljfldsjfaalkfjkldasjfalkdsfjalskfdjladsjfkdafs",
            create_time:"2022-2-1 12:39"
          },
          {
            user_id:1,
            fakeName:"test222",
            content:"jhkfaljdsalkdjkaljdkljfldsjfaalkfjkldasjfalkdsfjalskfdjladsjfkdafs",
            create_time:"2022-2-1 12:39"
          },
          {
            user_id:1,
            fakeName:"test222",
            content:"jhkfaljdsalkdjkaljdkljfldsjfaalkfjkldasjfalkdsfjalskfdjladsjfkdafs",
            create_time:"2022-2-1 12:39"
          }
        ],
        user:{
          fakeName:"",
          srcList: [
            {
              src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
              link_post_id:4
            },
            {
              src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
              link_post_id:3
            },
            {
              src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
              link_post_id:2
            },
            {
              src:require("../../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
              link_post_id:1
            }
          ]
        }
      },
      content: '<p>⛏<strong>主要材料：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">材料名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要工具：</strong></p><table style="width: 100%;"><tbody><tr><th colSpan="1" rowSpan="1">工具名称</th><th colSpan="1" rowSpan="1">数量</th></tr><tr><td colSpan="1" rowSpan="1"></td><td colSpan="1" rowSpan="1"></td></tr></tbody></table><p><br></p><p>⛏<strong>主要步骤：</strong></p>'
    }
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>

<style scoped>
.detail{
  border-style: solid;
  border-color: #252F3F;
  border-width: thin;
  margin:10px;
  border-radius: 10px;
  box-shadow: 3px 3px 10px #8c939d
}
.label-style{
  margin-left: 10px;
  margin-right: 10px;
  background-color: antiquewhite;
  padding-left: 10px;
  padding-right:10px;
  border-radius: 10px;
  box-shadow: 2px 2px 2px #8c939d;
}
.label-style :hover{
  cursor:pointer;

}
</style>
