/* eslint-disable no-unused-vars */


import Vue from "vue";
import VueRouter from "vue-router";

import Agendar from './components/Agendar/index.vue'
import Consulta from './components/Consulta/index.vue'
import Filtro from './components/Filtro/index.vue'
import Historial from './components/Historial/index.vue'
import Login from './components/Login/index.vue'
import Home from './components/Home/index.vue'
import Registro from './components/Registro/index.vue'
import TablaPaciente from './components/TablaPaciente/index.vue'


//el use para poner en marcha un plagin
Vue.use(VueRouter)

const router = new VueRouter({

    mode: 'history',
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/agendar', component: Agendar },
        { path: '/consulta', component: Consulta },
        { path: '/filtro', component: Filtro },
        { path: '/historial', component: Historial },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
        { path: '/registro', component: Registro },
        { path: '/pacientes', component: TablaPaciente }
    ]

})

export default router