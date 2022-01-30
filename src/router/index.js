import { createRouter, createWebHistory } from "vue-router";

import store from "@/store";

import Home from "@/pages/Home.vue";
import Auth from "@/pages/Auth.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth",
    name: "Auth",
    meta: {
      authPage: true,
    },
    component: Auth,
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

router.beforeEach((to) => {
  document.title = store.getters["todos/getTitle"] || "Todo App";

  if (store.getters["auth/getUserIsAuth"]) {
    if (to.meta.authPage) {
      return { name: "Home" };
    } else {
      return;
    }
  }

  if (!to.meta.authPage) {
    return { name: "Auth" };
  }
});

export default router;
