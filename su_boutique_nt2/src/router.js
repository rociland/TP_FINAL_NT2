/* eslint-disable no-unused-vars */


import Vue from "vue";
import VueRouter from "vue-router";

import Login from './components/Login/index.vue'
import Home from './components/Home/index.vue'
import Registro from './components/Registro/index.vue'


//el use para poner en marcha un plagin
Vue.use(VueRouter)

const router = new VueRouter({

    mode: 'history',
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
        { path: '/registro', component: Registro }
    ]

})

export default router