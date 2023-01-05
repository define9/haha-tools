<template>
  <el-container>
    <el-header>
      <Header />
    </el-header>
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
import Header from "./components/Header.vue";

export default {
  name: 'App',
  components: {
    Card,
    Header
  }
}
</script>

<style scoped>
.el-container {
  min-height: 100vh;
}

.el-header,
.el-footer {
  background-color: white;
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
  color: #333;
  text-align: center;
  background-image: linear-gradient(90deg, rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%),
    linear-gradient(rgba(180, 180, 180, 0.15) 10%, rgba(0, 0, 0, 0) 10%);
  background-size: 20px 20px;
}
</style>
