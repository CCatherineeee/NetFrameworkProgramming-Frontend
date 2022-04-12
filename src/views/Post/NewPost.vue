<template>
  <div>
    <home-header></home-header>
    <div class="main-back" style="background-color: rgba(46,60,75,0.71)">
      <quill-editor
          id="editorId"
          ref="myQuillEditor"
          toolbar="full"
          v-model:content="content"
          theme="snow"
          style="background-color: white"
          contentType="html"
          :options="options"
          @blur="onEditorBlur($event)"
          @focus="onEditorFocus($event)"
          @change="onEditorChange($event)" >
      </quill-editor>
    </div>
    <div>
    </div>
  </div>
</template>

<script>

import HomeHeader from "@/components/Home/HomeHeader";


import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css';


export default {
  name: "NewPost",
  components:{HomeHeader, QuillEditor},

}
</script>

<style scoped>

</style>
