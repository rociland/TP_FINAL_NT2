/* eslint-disable no-unused-vars */


import Vue from "vue";
import VueRouter from "vue-router";

import Login from './componentes/Login/index.vue'
import Registro from './componentes/Registro/index.vue'


//el use para poner en marcha un plagin
Vue.use(VueRouter)

export const router = new VueRouter({

    mode: 'history',
    routes: [
        { path: '/', redirect: '/Login'},
        { path: '/Login', component: Login },
        { path: '/Registro', component: Registro }
    ]

})