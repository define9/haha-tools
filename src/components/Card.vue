<template>
    <div>
        <el-row :gutter="20" v-for="row in rowCount" :key="row">
            <el-col :span="6" v-for="col in 4" :key="col">
                <el-card v-if="(row - 1) * 4 + col < tools.length" :set="tool = tools[(row - 1) * 4 + col]"
                 shadow="hover" :body-style="{ padding: '0px' }" @click.native="route(tool.link)">
                    <img :src="tool.img"
                        class="image">
                    <div style="padding: 14px;">
                        <span class="name">{{ tool.name }}</span>
                        <div class="bottom clearfix">
                            <span>{{ tool.desc }}</span>
                            <time class="time">{{ tool.date }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import axios from "axios"

export default {
    name: 'MCard',
    data() {
        return {
            tools: []
        }
    },
    methods: {
        route(link) {
        }
    },
    mounted() {
        const url = this.dataUrl == null ? "/tools.json" : this.dataUrl
        axios.get(url)
        .then(res => {
            this.tools = res.data
        })
    },
    computed: {
        rowCount(){
            return Math.ceil(this.tools.length / 4)
        }
    },
    props: {
        dataUrl: String
    }
}
</script>
  
<style scoped>
.name {
    font-size: larger;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.el-card {
    cursor: pointer;
}
.el-row {
    margin-bottom: 20px;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>