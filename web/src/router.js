import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
const About = () => import("./views/About.vue");
const Main = () => import("./views/Main.vue");

Vue.use(Router);

export default new Router({
  // mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/main",
      name: "main",
      component: Main
    }
  ]
});
