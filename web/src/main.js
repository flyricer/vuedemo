import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@babel/polyfill';
import directives from "./directives.js";
Vue.use(directives);
import MyPlugin from "./plugins.js";
Vue.use(MyPlugin);

import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(Element);

Vue.config.productionTip = false;

// export const EventBus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
