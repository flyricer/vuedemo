import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Main from "./views/Main.vue";
import CategoryCreate from "./views/CategoryCreate.vue";
import CategoryList from "./views/CategoryList.vue";
import ItemCreate from "./views/ItemCreate.vue";
import ItemList from "./views/ItemList.vue";

Vue.use(Router);


const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        { path: "/categories/create", component: CategoryCreate },
        { path: "/categories/list", component: CategoryList },
        { path: "/categories/edit/:id", component: CategoryCreate, props: true },

        { path: "/items/create", component: ItemCreate },
        { path: "/items/list", component: ItemList },
        { path: "/items/edit/:id", component: ItemCreate, props: true },
      ]
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});

//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  //判断要去的路由有没有requiresAuth
  if(to.meta.requiresAuth) {
    if(store.state.token) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
      });
    }
  } else {
    next();
  } 
});

export default router;