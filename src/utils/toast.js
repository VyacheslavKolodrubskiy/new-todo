import { ref } from "vue";

export default {
  install: (app) => {
    const toasts = ref([]);
    app.config.globalProperties.$toast = (text) => {
      if (!toasts.value.includes(text)) {
        toasts.value.push(text);
      }

      if (toasts.value.length) {
        setTimeout(() => {
          toasts.value.shift();
        }, 3000);
      }
    };

    app.provide("toasts", toasts.value);
  },
};
