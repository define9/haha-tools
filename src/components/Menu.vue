<template>
    <el-menu default-active="1" mode="horizontal"
     @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <i class="el-icon-house"></i>
            <router-link to="/" >首页</router-link>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-setting"></i>
            <span slot="title">导航2</span>
        </el-menu-item>
    </el-menu>
</template>

<script>
export default ({
    name: 'Menu',
    data() {
        return {
            
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
})
</script>

<style scoped>
.router-link-active {
  text-decoration: none;
  color: yellow;
}
a{
  text-decoration: none;
  color: white;
  user-select: none;
}
</style>