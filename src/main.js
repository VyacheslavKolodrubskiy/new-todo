import { createApp } from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";

import components from "@/components/register-global-components";

import "@/assets/css/tailwind.css";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
