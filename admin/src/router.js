import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Main from "./views/Main.vue";

import CategoryCreate from "./views/CategoryCreate.vue";
import CategoryList from "./views/CategoryList.vue";

import ItemCreate from "./views/ItemCreate.vue";
import ItemList from "./views/ItemList.vue";

import AdminUserEdit from './views/AdminUserEdit.vue'
import AdminUserList from './views/AdminUserList.vue'

import ArticleCreate from './views/ArticleCreate.vue'
import ArticleList from './views/ArticleList.vue'

Vue.use(Router);


const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '',
    //   redirect: '/categories/list'
    // },
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

        { path: "/admin_users/create", component: AdminUserEdit },
        { path: "/admin_users/list", component: AdminUserList },
        { path: "/admin_users/edit/:id", component: AdminUserEdit, props: true },

        { path: "/articles/create", component: ArticleCreate },
        { path: "/articles/list", component: ArticleList },
        { path: "/articles/edit/:id", component: ArticleCreate, props: true },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: () => import("./views/Login.vue"),
      meta: { isPublic: true}
    }
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
  //判断要去的路由有没有requiresAuth或isPublic
  if(!to.meta.isPublic && !localStorage.token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath } // 将刚刚要去的路由path作为参数，方便登录成功后直接跳转到该路由
      });
  } 
  next();
});

export default router;