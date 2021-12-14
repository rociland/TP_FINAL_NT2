/* eslint-disable no-unused-vars */


import Vue from "vue";
import VueRouter from "vue-router";

// import Consulta from './components/Consulta/index.vue'
import Login from './components/Login/index.vue'
import Home from './components/Home/index.vue'

import YaLogeado from './components/comunes/YaLogeado.vue'
import NoLogeado from './components/comunes/NoLogeado.vue'


//Paciente
// import PacienteFiltro from './components/PacienteFiltro/index.vue'
import PacienteRegistro from './components/PacienteRegistro/index.vue'
import PacienteRegistrados from './components/PacienteRegistrados/index.vue'

//PRODUCTO
import ProductoRegistro from './components/ProductoRegistro/index.vue'
import ProductoRegistrados from './components/ProductoRegistrados/index.vue'



//el use para poner en marcha un plagin
Vue.use(VueRouter)

const router = new VueRouter({

    mode: 'history',
    routes: [
        { path: '/', redirect: '/login' },
        // { path: '/consulta', component: Consulta },
        { path: '/login', component: Login },
        { path: '/home', component: Home },
        // { path: '/filtro', component: PacienteFiltro },
        { path: '/pacienteregistro', component: PacienteRegistro },
        { path: '/pacienteregistrados', component: PacienteRegistrados },
        { path: '/productoregistro', component: ProductoRegistro },
        { path: '/productosregistrados', component: ProductoRegistrados },
        { path: '/yalogeado', component: YaLogeado },
        { path: '/noautenticado', component: NoLogeado }

        

    ]

})

export default router