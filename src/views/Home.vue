<template>
  <div class="container-back">
    <div>
      <el-affix :offset="0">
        <div class="login-header  " style="width: 100%" >
          <home-header></home-header>
        </div>
      </el-affix>
      <div>
        <div>

          <el-carousel height="350px" style="width: 100%">
            <el-carousel-item>
              <img src="../assets/img/FN473HBJW0Y4BP3.jpg" style="margin-top: -100px"/>
            </el-carousel-item>
            <el-carousel-item >
              <img src="../assets/img/F7QO10SJW6NTELY.jpg" style="margin-top: -140px" />
            </el-carousel-item>
            <el-carousel-item >
              <img src="../assets/img/FAC1I9EHQ0IQSXB.jpg"  style="margin-top: -100px" />
            </el-carousel-item>
            <el-carousel-item>
              <img src="../assets/img/FNU6WP1JWB4AG0Y.jpg" style="margin-top: -100px" />
            </el-carousel-item>
          </el-carousel>
        </div>


        <div class="main-back">
          <el-button type="text"><h1 class="text-button"><b>热点教程 HOT POSTS ></b></h1></el-button>
        </div>
        <div class="main-back">
          <div class="grid grid-cols-4 gap-2" style="margin: 20px 20px 10px 20px">
            <div v-for="(item,index) in hotGoodList" :key="index">
              <el-card shadow="hover" class="card" style="cursor: pointer" @click="jump(item.postId)">
                <img :src="item.picUrl" style="border-radius: 10px" />
                <el-button type="text" style="text-align: center">{{item.title}}</el-button>
                <el-row>
                  <div v-for="(it,i) in item.postLabels" :key="i">
                    <div style="background: antiquewhite;padding: 5px;margin: 2px;border-radius: 10px;cursor: pointer;font-size: x-small">{{it.label}}</div>
                  </div>
                </el-row>
              </el-card>
            </div>
          </div>
        </div>

        <div class="main-back">
          <el-button type="text"><h1 class="text-button"><b>最新发布 NEWEST POSTS ></b></h1></el-button>
        </div>
        <div class="main-back">
          <div class="grid grid-cols-4 gap-2" style="margin: 20px 20px 10px 20px">
            <div v-for="(item,index) in newList" :key="index">
              <el-card shadow="hover" class="card" style="cursor: pointer" @click="jump(item.postId)">
                <img :src="item.picUrl" style="border-radius: 10px" />
                <el-button type="text" style="text-align: center">{{item.title}}</el-button>
                <el-row>
                  <div v-for="(it,i) in item.postLabels" :key="i">
                    <div style="background: antiquewhite;padding: 5px;margin: 2px;border-radius: 10px;cursor: pointer;font-size: x-small">{{it.label}}</div>
                  </div>
                </el-row>
              </el-card>
            </div>
          </div>
        </div>


        <el-divider></el-divider>
        <div >

          <el-row class="main-back" style="border-color: #252F3F;border-style: solid;border-radius: 10px;border-width: thin;">

              <el-col :span="8">
                <el-row style="width: 100%">
                  <el-col :span="24" style="margin: 20px 20px 10px 20px">
                    <el-button type="text"><h1 class="text-button"><b>兴趣搜索 INTEREST FINDER</b></h1></el-button>
                    <p style="margin-top: 10px">按标签寻找感兴趣的的教程</p>

                  </el-col>

                </el-row>
                <div class="grid  grid-cols-1 gap-2" style="margin: 20px 20px 10px 20px">
                  <div v-for="(item,index) in Math.ceil(labelList.length / 3)" :key="index + 'table'" class="flex flex-row">
                    <div v-for="(data, itemI) in labelList.slice(index * 3,item * 3)" :key="'carousel' + itemI" :class= "data.style" style="margin-right: 10px">
                      <div  style="padding-left: 10px;padding-right: 10px" @click="selectLabelItem(data,(index*3+itemI))">
                        {{data.label}}
                      </div>
                    </div>
                  </div>
                </div>

              </el-col>
              <el-col :span="14">
                <div class="grid grid-cols-4 grid-row-2 gap-4" style="margin:10px">
                  <div v-for="(item,index) in item.srcList" :key="index">
                    <img :src="item" style="border-radius: 10px">
                  </div>

                </div>

              </el-col>
            </el-row>

        </div>

        <el-divider></el-divider>
        <div class="main-back">
          <el-button type="text"><h1 class="text-button"><b>人气商品 HOT SHOP ></b></h1></el-button>
        </div>


        <div >
          <svg xmlns="http://www.w3.org/2000/svg" class="wt-fill-denim-tint wt-width-full" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path  d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" fill="rgba(251,235,209)"></path></svg>
          <div style="background-color: rgba(251,235,209)">
            <br />
            <div style="text-align: center;" ><h1 style="font-size: x-large;font-family:'Yu Gothic';"><b>What is HandyShare</b></h1></div>
            <div class="flex space-x-7 ... main-back" >
              <div class="flex-1 ..." style="padding: 0px 3px 0px 0px">
                <h1 style="font-size: large;font-family:'Yu Gothic';"><b>STEP-BY-STEP</b></h1>
                <p style="color: rgba(25,25,25,0.71)">We make it easy to learn how to make anything, one step at a time. From the stovetop to the workshop, you are sure to be inspired by the awesome projects that are shared everyday.</p>
              </div>
              <div class="flex-1 ...">
                <div class="flex-1 ..." style="padding: 0px 3px 0px 0px">
                  <h1 style="font-size: large;font-family:'Yu Gothic';"><b>MADE BY YOU</b></h1>
                  <p style="color: rgba(25,25,25,0.71)">HandyShare are created by you. No matter who you are, we all have secret skills to share. Come join our community of curious makers, innovators, teachers, and life long learners who love to share what they make.</p>
                </div>
              </div>
              <div class="flex-1 ...">
                <div class="flex-1 ..." style="padding: 0px 3px 0px 0px">
                  <h1 style="font-size: large;font-family:'Yu Gothic';"><b>A HAPPY PLACE</b></h1>
                  <p style="color: rgba(25,25,25,0.71)">Making things makes people happy. We can't prove it, but we know it to be true. Find your happy place, and join one of the friendliest online communities anywhere.</p>
                </div>
              </div>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" class="wt-fill-denim-tint wt-width-full" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" fill="rgba(217,230,246)"></path></svg>

          </div>

        </div>

        <div style="background-color: rgba(217,230,246)">

          <el-row style="width: 100%;margin-bottom: 20px">
            <el-col :span="8"></el-col>
            <el-col :span="8">
              <div class="justify-center ">
                <div class="w-25">
                  <br />
                  <p class="italic w-25	" style="text-align: center">See personalized recommendations</p>
                  <el-button style="background-color: white;text-align: center;width: 100%"><b>Sign In</b></el-button>
                  <br />
                </div>
              </div>
            </el-col>

            <el-col :span="8"></el-col>


          </el-row>
          <svg xmlns="http://www.w3.org/2000/svg" class="wt-fill-denim-tint wt-width-full" viewBox="0 0 1280 30" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false"><path d="M1280 30h-8.1c-5.7 0-37-10.9-37.4-10.7-2.2 1.2-17.6-.8-19.9-4.1 0 0-9.8-3.3-10.3-3.3-1.3 0-12.6 3-13 2.5-.7-.7-13.8-3.7-13.8-5.3-2.3 1.3-21.2-7.8-23.4-6.7-1-.8-2.2-1.5-3.3-2.4-1.8 1.9-3.3 3.4-4.7 4.9-2.7-.8-4.8-1.4-7.1-2.1-.5.1-1 .3-1.5.5-4 1.3-5.3 1-7.3-1.3-1.7-2.1-5.3-2.2-8.1-.8-2 1-4.6 2.6-6.5 2.3-4.5-.7-6 1.1-8.1 2.6-1.5 1.1-3.1 2.1-4.6 3.1-1.8-.8-3.5-1.2-5.3-2-.3.8-.7 1.3-.8 2-.5 0-.8 0-1.2-.1V3.5c-2 .8-3.5 1.2-4.8 1.8-1.3-.8-2.3-1.6-3.5-2.4-5.1 1.2-10.1 2-15.3.1-.8-.3-2.2-.3-3-.1-1.2.3-2.2 1-3.3 1.6-1.2-.3-2.3-.8-3.8-1.1-1.7 1.1-3 2.9-6.5 1.6-.8-.3-2.3.1-3.5.3-4 .8-7.8 1.4-11.9 2-1.5.2-3-.2-4.7-.3-1-.1-1.8-.2-2.8-.2-6-.3-11.8 2.3-17.8.1-.5-.2-1.3-.2-1.8-.1-3.8 1.6-8.3 1.2-12.5 1.3-1 0-2.2.5-3.1.9-1.8.8-9.5 1.5-11.5 1.1-4.5-.8-8.1-.3-10.1 2.3-12.8-1.6-12.8-1.6-17.1.9-2.3-.4-6-1.6-7.1-1.1-4.7 2.4-7 .2-9.8-1.4-5 1.1-10.8-.8-15.8 1.4-7.3-2.7-14.9-2.7-22.9-.2-5-3.7-9.6-3.8-13.8 0-.3-1.3-.7-2.5-1-3.8-3.3.8-6.1 1.1-8.6 1.8-2.7.7-6 2.3-7.5 1.9-4.2-1.3-5.3 1.8-9 1.4-1-.9-2.3-2.2-4-3.5-1.3.3-2.8.7-4 1-3.5 1.1-6.8 2-10.3 0-.5-.3-1.8-.2-2.8-.1-2.5.2-4.8.7-7.5.9-.8.9-1.7 1.9-2.3 2.9-8.5-1.1-16.4-2.6-24.7-.4-.3.1-1.2-.1-1.7-.3-2.3-1.2-3.7-.3-5.1.8-1.2.7-2.7 1.8-4 1.8-7.3.2-14.8-.4-22.1.3-3 .3-6.8-.3-9 .7-3.3 1.5-6 .9-9.1.5-2.7-.4-5-.9-7.1-2.1-2-1-4.3-.5-4.6 1.1-.3 1.5-1.8 2.3-3.7 2.1-3.3-.8-6.8-.3-10-1.8-4.8-2.1-10.6-2.7-16.3-.7-1.7.7-3.3 1-5 1.6-.3.1-.8.1-1.5.1-1.2-.7-2.3-1.2-3.5-1.9-2 1.8-4.6 1.8-7.1.9-2.8-.8-5.6-1.3-8.8-.9-2.7.3-5.5.5-8.3.7-2 .1-4.5.8-5.8-.9-.2-.3-1.5-.4-2.2-.3-3.7.7-7.3 1.5-11 2.2-.2-.3-.5-.5-.5-.7-.2-.3-.2-.8-.2-.8-1.8.5-3.7 1.2-5.6 1.4-1.8.2-4.7-.7-5.8-.1-3.8 1.9-8.1 1.2-12.3 1.9-2.2-2.5-2.2-2.5-5.8-.9-.7.3-1.5.5-2.3.5-3-.1-6.1-.2-9.1-.5-2.7-.3-5.6-.5-7.6-1.4s-3.8-1.3-6.1-1.2c-4.6.2-9.3.3-13.9.5-4.3.2-8.6.4-14.3.8-1.7-.5-4.7-1.2-7.5-2.2-3.7-1.4-7.1-1.4-10.8.1-1.7.7-4.5 1.6-5.5 1.2-3.3-1.4-1.7 1.3-3 1.1-1.8-.3-3.7-.9-5.1-.7-3.7.4-7.1-.2-10.8-.1-5 .1-10 0-11.6 4.1-5-2.4-9.1-1-13 .5-1.3-.8-2.2-1.4-2.8-1.9-1.7.5-3 1.3-4.2 1.1-2.7-.3-5-1.1-7.3-1.8-1 .4-2 1-3 1.1-5.1.4-10.3.4-15.3.9-2 .2-5-.5-6.6 1.1-.3.3-2.8.4-3.3 0-2.2-1.9-5.1-1.2-8-1-3.3.3-6.6.5-9.8-.7-1.5-.5-4-.8-5.3-.2-4.6 1.9-9.5 2.6-14.9 3.3-5.6.8-9.8-.5-13.9-2.2-1.7 1-3.3 1.6-5.5.4-4.8-3-10.1-2.1-15.6-.7-2.8-.8-5.5-3.3-9.6-1.2-5.6-.8-11.1-.7-16.4 1-.7.2-2 .1-2.3-.2-1.7-1-3.5-1.8-6-1.6-1.2-2.5-4-.9-6.1-.8-2.5 0-5.1 1-7.1.5-2.5-.7-5-.4-7.3-.8-2.8-.4-6 .8-9 .8-5.3.3-10 1.4-13.9 3.6-.8.4-1.7.9-2.5.9-3.8.3-7.6.7-11.5.4-3.7-.3-7.3-.7-11.1-.1-1 .1-2.3-.5-3.3-.9-2.5-1-4.8-1.9-8.1-1.1-2.2.4-4.2 0-3.8-1.8-2.3.1-5 .8-7.1.3-2-.4-3-.9-4.5.5-.7.5-3.2.1-4.6.5-4.2.9-8.1 2.4-12.3 3-2.2.3-5.5.3-7.5-1.3-3.5-2.6-5.3-2.4-11-.9-1.3.3-2.8.8-4.3.9-3.3.2-6.8.3-10.8.5-2-2.9-6-5.2-11.5-7v3.1c-4.5-3.8-10.8-3-16.1-4.4-4.5 1.8-9 3.4-14.6 5.5-5-1-9.6-3.1-15.3-1.2-1 .3-3.2.1-4-.4-3.2-1.9-7.5-1.9-11-3.2-4.2-1.6-8.8-2.9-13.3-4.2-1.2-.3-11.8 2.4-13 2.4-6.6 0-20.3 11.5-25.6 9.8-6.1-2-13 .2-20.1-1-8.1 2.3-15.3 7.2-19.8 7.7H0M172.9 20c.1 0 .3 0 0 0z" fill="rgba(83,108,201)"></path></svg>
        <div style="background-color: rgba(83,108,201);height: 50px">

        </div>
        </div>
        <el-divider></el-divider>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "../components/Home/HomeHeader";
import HomeCard from "@/components/Home/HomeCard";
import axios from "axios";
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeCard
  },
  data(){
    return{
      index:0,
      item:{
        label:"🐏 羊毛毡",
        srcList:[
          require("../assets/img/il_340x270.446882086_t1zg.png"),
          require("../assets/img/il_340x270.446882086_t1zg.png"),

          require("../assets/img/il_340x270.446882086_t1zg.png"),

          require("../assets/img/FN473HBJW0Y4BP3.jpg"),
          require("../assets/img/F7QO10SJW6NTELY.jpg"),
          require("../assets/img/il_340x270.446882086_t1zg.png"),

          require("../assets/img/il_340x270.446882086_t1zg.png"),

          require("../assets/img/il_340x270.446882086_t1zg.png"),

        ],
        style : "label"
      },
      newList:[],
      labelList:[
        {
          label:"🐏 羊毛毡",
          srcList:[
            require("../assets/img/il_340x270.446882086_t1zg.png"),
            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),
            require("../assets/img/il_340x270.446882086_t1zg.png"),
            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

          ],
          style : "label"
        },
        {
          label:"🧶 编织",
          srcList:[
            require("../assets/img/il_340x270.446882086_t1zg.png"),
            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

          ],
          style : "label"

        },
        {
          label:"👓 饰品",
          srcList:[
            require("../assets/img/il_340x270.446882086_t1zg.png"),
            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

            require("../assets/img/il_340x270.446882086_t1zg.png"),

          ],
          style : "label"

        },
        {
          label:"🎗 布艺",
          style : "label"

        },
        {
          label:"🎫 纸艺",
          style : "label"

        },
        {
          label:"🍃 旧物改造",
          style : "label"

        },
        {
          label:"⚱ 粘土陶土",
          style : "label"

        },
        {
          label:"🖼 手绘",
          style : "label"

        },
        {
          label:"🗿 雕塑雕刻",
          style : "label"

        },

        {
          label:"🖼 手绘",
          style : "label"

        },
        {
          label:"🗿 雕塑雕刻",
          style : "label"

        }
      ],
      hotGoodList:[
        {
          src:require("../assets/img/il_340x270.446882086_t1zg.png"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../assets/img/Fuji_Quad_Chair_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },
        {
          src:require("../assets/img/Fuji_Quad_Headset_2x._SY232_CB667159060_.jpg"),
          title:"this is an title how to use",
          author:"tCathf",
          lable:"wood"
        },

      ]
    }
  },
  methods:{
    selectLabelItem(item,index){
      console.log(index)
      this.item = item
      this.labelList[this.index].style = "label"
      this.labelList[index].style = "active"
      this.index = index
    },
    async getHot(item,index){
      axios.get('api/Posts/hotPost').then(res=>{
        console.log(res)
        this.hotGoodList = res.data
      })
    },
    async getNew(item,index){
      axios.get('api/Posts/newPost').then(res=>{
        console.log(res)
        this.newList = res.data
      })
    },
    jump(id){
      this.$router.push({
        name: 'post-detail', params: {id: id}
      })
    },
  },
  mounted() {
    this.getHot()
    this.getNew()
  }
}
</script>
<style scoped>
.login-header{
  box-shadow: 4px 7px 5px lightgray;
  height: 125px;
  margin: 0px 0px 30px 0px;
  background-color: #252F3F;

}
.container-back{
  height: 900px;
}

.main-back{
  margin-top: 30px;
  margin-left: 80px;
  margin-right: 80px;
}
.text-button{
  font-size: x-large;
  font-family:'Yu Gothic';
  color: #252F3F
}
.text-button :hover{
  border-bottom: #252F3F;
  border-style: solid;
}
.label{
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  background-color: antiquewhite;

}
.active{
  border-color: #252F3F;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  cursor: pointer;
  background-color: antiquewhite;


}
.label :hover{
  border-color: #252F3F;
  border-style: solid;
  border-width: thin;
  border-radius: 10px;
  cursor: pointer;

}

</style>
