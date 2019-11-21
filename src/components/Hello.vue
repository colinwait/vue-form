<template>
    <div>
        <el-header>
            我来组成头部
        </el-header>
        {{ msg }}
        <el-button @click="visible = true">我是谁</el-button>
        <el-dialog :visible.sync="visible" title="Hello world">
            <p>Try Element</p>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            msg: '今日运势：不宜',
            visible: false
        }
    }
}
</script>

<style>

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
</style>
