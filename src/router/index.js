import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Detail from '../views/Detail'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: "home",
        component: Home,
        meta: {title: "苏州银行系统"}
    },
    {
        path: '/detail/:chainname/:enterprisename',
        component: Detail,
        name: "detail",
        meta: {title: "详情"}
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
