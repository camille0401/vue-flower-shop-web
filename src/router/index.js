import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: () => import("@/views/Layout/index.vue"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/Home/index.vue"),
        },
        {
          path: "allCategories", //测试
          name: "allCategories",
          component: () => import("@/views/AllCategories/index.vue"),
        },
        {
          path: "category/:id",
          name: "category",
          component: () => import("@/views/Category/index.vue"),
        },
        {
          path: "category1/:id",
          name: "category1",
          component: () => import("@/views/Category/index1.vue"),
        },
        {
          path: "category/sub/:id",
          name: "SubCategory",
          component: () => import("@/views/SubCategory/index.vue"),
        },
        {
          path: "detail/:id",
          name: "detail",
          component: () => import("@/views/Detail/index.vue"),
        },
        {
          path: "cartlist",
          name: "cartlist",
          component: () => import("@/views/CartList/index.vue"),
        },
        {
          path: "settlement",
          name: "settlement",
          component: () => import("@/views/Settlement/index.vue"),
        },
        {
          path: "settlement1",
          name: "settlement1", ////测试
          component: () => import("@/views/Settlement/index1.vue"),
        },
        {
          path: "pay",
          name: "pay",
          component: () => import("@/views/Pay/index.vue"),
        },
        {
          path: "pay/result",
          name: "payResult",
          component: () => import("@/views/Pay/PayResult.vue"),
        },
        {
          path: "member",
          name: "member",
          component: () => import("@/views/Member/index.vue"),
          children: [
            {
              path: "",
              component: () => import("@/views/Member/UserHome/index.vue"),
            },
            {
              path: "info",
              name: "member-userinfo",
              component: () => import("@/views/Member/UserInfo/index.vue"),
            },
            {
              path: "order",
              name: "member-userorder",
              component: () => import("@/views/Member/UserOrder/index.vue"),
            },
          ],
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/Login/index1.vue"),
    },
  ],
  // 路由滚动行为定制
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
