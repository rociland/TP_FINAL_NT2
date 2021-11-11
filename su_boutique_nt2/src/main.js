import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'

Vue.config.productionTip = false

// import { router } from './router'
import './form'
import './axios'

new Vue({
  render: h => h(App),
}).$mount('#app')
