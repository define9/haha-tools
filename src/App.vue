<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col :offset="3" :span="18"><Card/></el-col>
      </el-row>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
import Card from "./components/Card.vue"

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
</style>
