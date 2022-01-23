import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    component: () => import(/* webpackChunkName: "auth" */ "@/pages/Auth.vue"),
  },
  {
    path: "/archive",
    name: "Archive",
    component: () =>
      import(/* webpackChunkName: "archive" */ "@/pages/Archive.vue"),
  },
  {
    path: "/label",
    name: "Label",
    component: () =>
      import(/* webpackChunkName: "label" */ "@/pages/Label.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
