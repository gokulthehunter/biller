import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
// index.js or main.js
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(axios,VueAxios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 
