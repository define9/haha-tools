<template>
    <el-row>
        <el-col :span="6">1</el-col>
        <el-col :span="6">2</el-col>
        <el-col :span="6">3</el-col>
        <el-col :span="4">
            <el-input placeholder="请输入内容" v-model="input" class="searchClass">
                <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="2">
        </el-col>
    </el-row>
</template>

<script>
export default ({
    name: "Header"
})
</script>
