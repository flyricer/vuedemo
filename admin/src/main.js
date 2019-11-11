import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './plugins/element.js'
import http from './axios.js'
Vue.prototype.$http = http
Vue.config.productionTip = false;

Vue.mixin({
  computed: {
    uploadUrl(){
      return this.$http.defaults.baseURL + '/file/upload'
    }
  },
  methods: {
    getAuthHeaders(){
      return {
        Authorization: `Bearer ${localStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
