<template>
  <div style="text-align: center;">
    <el-row type="flex" justify="center" align="middle" style="height: 50%;">
      <el-input
          v-model="searchInput"
          placeholder="Please input"
      >
      </el-input>
    </el-row>
  </div>
</template>

<script>

export default {
  name: "HomeHeader",
  data(){
    return{
      searchInput:"",
    }
  }
}
</script>

<style scoped>

</style>
