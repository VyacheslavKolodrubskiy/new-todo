import { createStore } from "vuex";

import createPersistedState from "vuex-persistedstate";

import todos from "@/store/modules/todos";
import auth from "@/store/modules/auth";

export default createStore({
  modules: { auth, todos },
  plugins: [
    createPersistedState({
      paths: ["auth", "todos"],
    }),
  ],
});
