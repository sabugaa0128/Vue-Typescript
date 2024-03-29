export const constantRoute = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    name: "login",
    meta: {
      title: "登录",
    },
  },
  {
    path: "/",
    component: import("@/layout/index.vue"),
    name: "layout",
    meta: {
      title: "layout",
    },
    children: [
      {
        path: "/home",
        component: () => import("@/views/home/index.vue"),
        meta: {
          title: "首页",
        },
      },
    ],
  },
  {
    path: "/404",
    component: import("@/views/404/index.vue"),
    name: "404",
    meta: {
      title: "404",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
    name: "Any",
    meta: {
      title: "任意",
    },
  },
];
