<template>
    <div v-loading="loading">
        <el-empty v-if="tools.length == 0" description="这里什么都没有"></el-empty>
        <el-row :gutter="20" v-for="row in rowCount" :key="row">
            <el-col :span="6" v-for="col in 4" :key="col">
                <el-card v-if="(row - 1) * 4 + col - 1 < tools.length" :set="tool = tools[(row - 1) * 4 + col - 1]"
                    shadow="hover" :body-style="{ padding: '0px' }"
                    @click.native="route(tools[(row - 1) * 4 + col - 1])">
                    <img :src="tool.img" class="image">
                    <div style="padding: 14px;">
                        <span class="name">{{ tool.name }}</span>
                        <div @mouseenter="(e) => isShowToltip(e, (row - 1) * 4 + col - 1)"
                            @mouseout="tools[(row - 1) * 4 + col - 1].isShow = false">
                            <el-tooltip :disabled="!tools[(row - 1) * 4 + col - 1].tip" effect="dark" :content="tool.desc"
                                placement="top">
                                <span class="desc">{{ tool.desc }}</span>
                            </el-tooltip>
                        </div>
                        <div class="bottom clearfix">
                            <time class="time">{{ tool.date }}</time>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <a v-if="searching" href="" @click.prevent="tools = originTools; searching = false">查看全部</a>
    </div>
</template>

<script>
import axios from "axios"
import eventBus from '../eventBus.js'
import { textRange } from '../utils/common'

export default {
    name: 'MCard',
    data() {
        return {
            tools: [],
            originTools: [],
            searching: false,
            loading: false
        }
    },
    methods: {
        /**
         * template传参时, 不能穿:set中的tool,因为调用时 tool 会被最后一个渲染的tool覆盖掉
         * @param {*} tool 
         */
        route(tool) {
            if (tool.openNewWindow) {
                window.open(tool.link)
            } else {
                this.$router.push(tool.link)
            }
        },
        isShowToltip(e, i) {
            this.tools[i].tip = textRange(e.target)
        }
    },
    mounted() {
        this.loading = true
        const url = this.dataUrl == null ? "/tools.json" : this.dataUrl
        axios.get(url)
            .then(res => {
                res.data.forEach(item => {
                    item.tip = false
                })
                this.originTools = res.data
                this.tools = res.data
                this.loading = false
            })
        eventBus.$on('searchTool', val => {
            this.loading = true
            if (val.length === 0) {
                this.tools = this.originTools
                this.searching = false
                this.loading = false
                return
            }
            this.tools = []
            this.searching = true
            val = val.toUpperCase()
            this.originTools.forEach(tool => {
                let name = tool.name.toUpperCase()
                let desc = tool.desc.toUpperCase()
                if (name.includes(val) || desc.includes(val)) {
                    this.tools.push(tool)
                }
            })
            this.loading = false
        })
    },
    computed: {
        rowCount() {
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
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}

.desc {
    width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
}

.el-card {
    cursor: pointer;
}
.el-card:hover {
    box-shadow: 0 10px 32px 0 rgba(0,0,0,.15) !important;
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