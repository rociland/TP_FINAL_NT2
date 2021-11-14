import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUsers, faCalendarAlt, faWineBottle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import { BootstrapVue } from 'bootstrap-vue'
import Notifications from 'vue-notification'

library.add(faUsers, faCalendarAlt, faWineBottle)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false
Vue.use(BootstrapVue);
Vue.use(Notifications);
import  router from './router'
// import notification from './notification'

import './form'
import './axios'

new Vue({
  render: h => h(App),
  router,
  // notification
}).$mount('#app')
