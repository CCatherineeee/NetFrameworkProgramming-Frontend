<template>
  <div style="margin-bottom: 60px">
    <el-affix :offset="0">
      <div class="login-header  " style="width: 100%" >
        <home-header></home-header>
      </div>
    </el-affix>
    <div class="main-back">
      <el-row style="margin: 10px">
        <h1 style="font-size: xx-large;word-break:break-all" >{{post.title}}</h1>
        <el-button v-if="isFavorite" style="background-color: #409EFF;color: white;margin: 10px 10px 10px 20px;" size="large" @click="disfollow()">取消收藏</el-button>
        <el-button v-else style="background-color: #409EFF;color: white;margin: 10px 10px 10px 20px;" size="large" @click="dialogVisible=true;getMy()">收藏</el-button>

      </el-row>
      <el-row>
        <div style="margin: 10px">发布时间：{{post.createTime}}</div>
        <div style="margin: 10px">点击量：{{post.viewCount}}</div>
        <div style="margin: 10px">收藏量：{{post.favoriteCount}}</div>

      </el-row>

      <el-row>

        <el-col :span="16">
          <el-row style="margin: 10px">
            <img :src="post.picUrl" style="width: 100%;height: 400px"/>
          </el-row>
          <el-row>
            <div v-for="(item,index) in post.postLabels " :key="index" class="label-style">
              <div >{{item.label}}</div>
            </div>
          </el-row>
          <div v-html="post.content" style="padding: 20px;"  class="detail"></div>
          <div style="margin: 40px 20px 20px;">
            <el-divider><b>评论区</b></el-divider>
          </div>
          <br />
          <div>
            <div v-for="(item,index) in post.comments" :key="index">
              <div class="detail" style="padding: 20px">
                <el-row>
                  <el-col :span="2">
                    <el-avatar size="large" :src="item.user.avatarUrl" style="cursor: pointer" />

                  </el-col>
                  <el-col :span="19">
                    <div style="margin-right: 30px">
                      {{item.user.name}}
                    </div>
                    <div style="color: #8c939d">
                      {{item.createTime}}
                    </div>
                    <el-row style="margin-top: 10px">
                      <div style="word-break:break-all">
                        <div v-html="item.content"></div>
                      </div>
                    </el-row>
                  </el-col>
                </el-row>

              </div>
            </div>
          </div>

          <div>
            <el-pagination
                small
                background
                layout="prev, pager, next"
                :total="page.total"
                :page-size="5"
                :pager-count="page.cur"
                class="mt-4"
            />
          </div>

          <div style="margin-top: 20px">
            <QuillEditor theme="snow" v-model:content="comment" contentType="html" />
            <div style="margin-top: 20px">
              <el-button style="background-color: #409EFF;color: white;box-shadow: 1px 1px 3px #8c939d;" @click="upload"> 发表评论 </el-button>

            </div>
          </div>



        </el-col>
        <el-col :span="6" style="margin: 10px">
          <div style="padding: 20px"  class="detail">
            <el-row>
              <div style="font-size: large"><b>创建者：</b><router-link to="">{{post.user.name}} </router-link> </div>
              <el-button v-if="isFollow" type="primary" style="background: #409EFF;margin-left: 10px" @click="disFollow">取消关注</el-button>
              <el-button v-else type="primary" style="background: #409EFF;margin-left: 10px" @click="follow">关注</el-button>

            </el-row>
            <br />
            <el-row><div style="font-size: medium">创建者的其他教程</div></el-row>
            <br />

            <div class="grid grid-cols-2 md:grid-rows-2 gap-4" style="margin-top: 20px;">
              <div v-for="(item,index) in post.user.posts" :key="index" style="cursor: pointer" shadow="hover" @click="jump(item.postId)">
                <img :src="item.picUrl" style="width: 100%;border-radius: 10px;cursor: pointer" />
                <div style="text-align: center;"><p>{{item.title}}</p></div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>

    <el-dialog
        v-model="dialogVisible"
        title="收藏"
        >
      <span>
        <el-table
            ref="singleTableRef"
            :data="favoriteList"
            highlight-current-row
            style="width: 100%"
            @current-change="handleCurrentChange">
        <el-table-column type="index" width="50" />
        <el-table-column property="name" label="Name"/>
      </el-table>

      </span>

      <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogVisible = false;favorite()" style="background: #409EFF">确认</el-button>
      </span>
      </template>
    </el-dialog>

  </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader";
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';
import axios from "axios";

export default {
  name: "PostDetail",
  components:{
    HomeHeader,
    QuillEditor
  },
  data(){
    return{
      page:{
        cur:1,
        total:1
      },
      isFollow:false,
      comment:"",
      isFavorite:false,
      dialogVisible:false,
      post:{
        post_id:"",
        content:"",
        postLabels:[
        ],
        comments:[
        ],
        user:{
          fakeName:"",
          srcList: [
          ]
        }
      },
      content: '',
      favoriteList:[],
      selectFavorite:null,
      favoriteId:null
    }
  },
  methods:{
    async getData(){
      await axios.get('api/Posts',{
        params:{
          id:this.$route.params.id
        }
      }).then(res=>{
        console.log(res)
        this.post = res.data
        this.page.total = this.post.comments.length;
      })
    },

    handleCurrentChange(val){
      this.selectFavorite = val.favoriteId
    },
    async getMy(){
      await axios.get("/api/Favorite/my",{
        params:{
          "id":localStorage.getItem("id")
        }
      }).then(res=>{
        console.log(res)
        this.favoriteList = res.data
      }).catch(err=>{
        console.log(err)
        this.$message.error("网络错误！")
      })
    },
    async check(){
      await axios.post('api/Favorite/check',null,{
        params:{
          postId:this.$route.params.id,
          id:localStorage.getItem("id")
        }
      }).then(res=>{
        console.log(res)
        this.isFavorite = res.data
        this.favoriteId = res.msg
      })
    },
    async disfollow(){
      await axios.post('api/Favorite/disfavorite',null,{
        params:{
          "id":parseInt(this.favoriteId),
          "postId":this.$route.params.id
        }
      }).then(res=>{
        console.log(res)
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
      location.reload()

    },
    async follow(){
      await axios.post('api/Follow/follow',null,{
        params:{
          "uid":localStorage.getItem("id"),
          "toid":this.post.user.userId
        }
      }).then(res=>{
        console.log(res)
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
      location.reload()
    },

    async disFollow(){
      await axios.post('api/Follow/disFollow',null,{
        params:{
          "uid":localStorage.getItem("id"),
          "toid":this.post.user.userId
        }

      }).then(res=>{
        console.log(res)
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
      location.reload()
    },
    async upload(){
      await axios.post('api/Comments/add',{
        "userId":localStorage.getItem("id"),
        "postId":this.$route.params.id,
        "content":this.comment
      }).then(res=>{
        console.log(res)
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
      location.reload()
      // console.log(this.comment)
    },
    async addView(){
      await axios.post('api/Posts/view',null,{
        params:{
          "id":this.$route.params.id,

        }
      }).then(res=>{
        console.log(res)

      }).catch(err=>{
        console.log(err)

      })
      // console.log(this.comment)
    },
    async checkIsFollow(){
      await axios.post('api/Follow/check',null,{
        params:{
          "uid":localStorage.getItem("id"),
          "toid":this.post.user.userId
        }
      }).then(res=>{
        console.log(res)
        this.isFollow = res.data

      }).catch(err=>{
        console.log(err)

      })
      console.log(this.isFollow)
    },
    handleChange(){
      content = valueHtml.value
    },
    async favorite(){
      console.log(this.selectFavorite)
      await axios.post('api/Favorite/add',null,{
        params:{
          "id":this.selectFavorite,
          "postId":this.$route.params.id
        }
      }).then(res=>{
        console.log(res)
        this.isFavorite = res.data
        }).catch(err=>{
        console.log(err)
        this.$message.error("网络堵塞！")

      })
      location.reload()

      // console.log(this.comment)
    },
    jump(id){
      this.$router.push({
        name: 'post-detail', params: {id: id}
      })

    },
  },
  async mounted() {
    console.log(this.$route.params.id)
    await this.getData()
    await this.check()
    await this.checkIsFollow()
    await this.addView()
  },
  watch: {
    '$route' (to, from) {
      location.reload()
    }
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
