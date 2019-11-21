<template>
    <div>
        我是谁
        <el-form>
            账号：
            <el-input v-model="username" placeholder="请输入账号"></el-input>
            密码：
            <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
        </el-form>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                password: '',
                username: ''
            }
        }
    }
</script>

<style scoped>

</style>
