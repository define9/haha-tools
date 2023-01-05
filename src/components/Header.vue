<template>
    <el-row>
        <el-col :span="6">1</el-col>
        <el-col :span="6">2</el-col>
        <el-col :span="6">3</el-col>
        <el-col :span="4">
            <el-input @keyup.enter.native="search" placeholder="键入以搜索工具" v-model="searchText">
                <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
            </el-input>
        </el-col>
        <el-col :span="2">
        </el-col>
    </el-row>
</template>

<script>
import eventBus from '../eventBus.js'

export default ({
    name: "Header",
    data() {
        return {
            searchText: ""
        }
    },
    methods: {
        search() {
            eventBus.$emit('searchTool', this.searchText)
        }
    }
})
</script>
