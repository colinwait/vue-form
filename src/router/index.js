import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import Login from '@/components/auth/Login'
import Form from '@/components/form/List'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/form',
            name: 'form',
            component: Form
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})
