import { createApp } from "vue";

import router from "./router";
import store from "./store";

import App from "./App.vue";
import components from "@/components/register-global-components";
import toast from "@/utils/toast";

import "@/assets/css/tailwind.css";

const app = createApp(App);

components.forEach((component) => {
  app.component(component.name, component);
});

app.config.globalProperties.$toast = toast;

app.use(store).use(toast).use(router).mount("#app");
