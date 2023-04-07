import { createRouter,createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
   {
    path: "/",
    name: "Home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/home.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/home.vue"),
  },
  {
    path: "/homeOperation",
    name: "homeOperation",
    component: () =>
    import(/* webpackChunkName: "about" */ "../views/homeOperation2.vue"),
  },
  // {
  //   path: "/homeOperation2",
  //   name: "homeOperation2",
  //   component: () =>
  //   import(/* webpackChunkName: "about" */ "../views/homeOperation2.vue"),
  // },
  {
    path: "/resource",
    name: "Resource",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/resource.vue"),
  },{
    path: "/serve",
    name: "Serve",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/serve.vue"),
  },
  ,{
    path: "/operation",
    name: "Operation",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/operation.vue"),
  },
  ,{
    path: "/xingche",
    name: "Xingche",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/xingche.vue"),
  },
  {
    path: "/loadFactor",
    name: "LoadFactor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/loadFactor.vue"),
  },
  {
    path: "/maxLoadFactor",
    name: "maxLoadFactor",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/maxLoadFactor.vue"),
  },
  {
    path: "/useRatio",
    name: "useRatio",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/useRatio.vue"),
  },
  {
    path: "/malfunction",
    name: "malfunction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/malfunction.vue"),
  },
  {
    path: "/reliable",
    name: "reliable",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/reliable.vue"),
  },
  {
    path: "/speed",
    name: "speed",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/speed.vue"),
  },
  {
    path: "/section",
    name: "section",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/section.vue"),
  },
  {
    path: "/transfer",
    name: "transfer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/transfer.vue"),
  },
  {
    path: "/capacity",
    name: "capacity",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/capacity.vue"),
  },
  {
    path: "/strength",
    name: "strength",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/strength.vue"),
  },
  {
    path: "/cashCheck",
    name: "cashCheck",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/cashCheck.vue"),
  },
  {
    path: "/onTime",
    name: "onTime",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/onTime.vue"),
  },
  {
    path: "/safe",
    name: "safe",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/safe.vue"),
  },
  {
    path: "/run",
    name: "run",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/run.vue"),
  },
   {
    path: "/service",
    name: "service",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/service.vue"),
  },
  {
    path: "/equipment",
    name: "equipment",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/equipment.vue"),
  },
  {
    path: "/duixian",
    name: "duixian",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/duixian.vue"),
  },
  //
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;