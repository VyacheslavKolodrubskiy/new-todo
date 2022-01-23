export default {
  namespaced: true,
  state: {
    todos: [],
    archiveTodos: [],
    lables: [],
  },
  mutations: {
    ADD_NEW_TASK({ todos }, payload) {
      todos.push(payload);
    },
    ADD_NEW_LABEL({ lables }, payload) {
      console.log(payload);
      lables.push(payload);
    },
    REMOVE_ALL_TASKS(state) {
      state.todos = [];
    },
    REMOVE_ALL_ARCHIVED_TASKS(state) {
      state.archiveTodos.map((item) => state.todos.push(item));
      state.archiveTodos = [];
    },
    REMOVE_ALL_LABELS(state) {
      state.lables = [];
    },
    REMOVE_TASK_BY_ID({ todos }, itemId) {
      const idx = todos.findIndex(({ id }) => id === itemId);
      todos.splice(idx, 1);
    },
    REMOVE_TASK_FROM_ARCHIVE({ archiveTodos, todos }, itemId) {
      const target = archiveTodos.find(({ id }) => id === itemId);
      const idx = archiveTodos.findIndex(({ id }) => id === itemId);
      archiveTodos.splice(idx, 1);
      todos.push(target);
    },
    REMOVE_LABEL({ lables }, itemId) {
      const idx = lables.findIndex(({ id }) => id === itemId);
      lables.splice(idx, 1);
    },
    TOGGLE_COMPLETE({ todos }, itemId) {
      const target = todos.find(({ id }) => id === itemId);
      target.complete = !target.complete;
    },
    TOGGLE_IMPORTANT({ todos }, itemId) {
      const target = todos.find(({ id }) => id === itemId);
      target.important = !target.important;
    },
    ADD_TASK_TO_ARCHIVE({ archiveTodos, todos }, itemId) {
      const target = todos.find(({ id }) => id === itemId);
      // const similar = archiveTodos.some(({ title }) => title === target.title);
      const idx = todos.findIndex(({ id }) => id === itemId);

      archiveTodos.push(target);
      todos.splice(idx, 1);
    },
  },
  actions: {},
  getters: {
    getAllTodos: ({ todos }) => todos,
    getAllTodosLength: ({ todos }) => todos.length,
    getAllArchiveTodos: ({ archiveTodos }) => archiveTodos,
    getAllLabels: ({ lables }) => lables,
    getAllLabelsLength: ({ lables }) => lables.length,
    getAllArchiveTodosLength: ({ archiveTodos }) => archiveTodos.length,
  },
};
