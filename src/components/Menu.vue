<template>
    <el-menu default-active="1" mode="horizontal"
     @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
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

</style>