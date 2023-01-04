<template>
  <el-container>
    <el-header>Header</el-header>
    <el-main>
      <el-row>
        <el-col :offset="3" :span="18">
          <Card :dataUrl="`http://localhost:8080/tools.json`" />
        </el-col>
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

.el-container {
  min-height: 100vh;
}

.el-header,
.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
}

.el-main {
  margin-top: 60px;
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
}
</style>
