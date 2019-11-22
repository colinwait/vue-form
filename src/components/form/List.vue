<template>
    <div id="formList">
        <el-table :data="formLists" border>
            <el-table-column label="序号" prop="id">
            </el-table-column>
            <el-table-column label="名称" prop="name">
            </el-table-column>
            <el-table-column label="操作">
                <el-button size="small" type="text">编辑</el-button>
                <el-button size="small" type="text">删除</el-button>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'list',
        data () {
            return {
                formLists: []
            }
        },
        mounted () {
            this.$http.get('http://form.local/api/form/forms').then((response) => {
                console.log(response.data.data.data)
                this.formLists = response.data.data.data
            })
        }
    }
</script>

<style scoped>

</style>
