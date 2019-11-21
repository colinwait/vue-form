import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/auth/Login'
import Form from '@/components/form/List'

Vue.use(Router)

export default new Router({
    routes: [
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
