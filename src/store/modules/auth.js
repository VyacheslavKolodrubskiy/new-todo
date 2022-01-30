export default {
  namespaced: true,
  state: {
    isAuth: null,
    name: "qwerty",
    password: "123",
  },
  mutations: {
    SET_USER_LOGIN(state) {
      state.isAuth = true;
    },
    SET_USER_LOGOUT(state) {
      state.isAuth = false;
    },
  },
  actions: {},
  getters: {
    getUserIsAuth: ({ isAuth }) => !!isAuth,
    getUserName: ({ name }) => name,
    getUserPassword: ({ password }) => password,
  },
};
