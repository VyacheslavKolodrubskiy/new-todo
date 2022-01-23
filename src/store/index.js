import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";

import todos from "@/store/modules/todos";
import labels from "@/store/modules/labels";

export default createStore({
  modules: { labels, todos },
  plugins: [
    createPersistedState({
      paths: ["labels", "todos"],
    }),
  ],
});
