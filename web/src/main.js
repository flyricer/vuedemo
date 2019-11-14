import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import './assets/scss/style.scss'
import './registerServiceWorker'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import http from './axios.js'
Vue.prototype.$http = http
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
