export default {
  namespaced: true,
  state: {
    todos: [],
    archiveTodos: [],
    labels: [],
    titleValue: "",
    labelValue: "",
    title: "",
    toastTitle: "",
    isToastOpen: false,
    isOpenLabelForm: null,
  },
  mutations: {
    SET_TITLE_TOAST(state, payload) {
      state.toastTitle = payload;
      state.isToastOpen = true;
    },
    RESET_TITLE(state) {
      state.toastTitle = "";
      state.isToastOpen = false;
    },
    ADD_NEW_TASK({ todos }, payload) {
      todos.push(payload);
    },
    ADD_NEW_LABEL({ labels }, payload) {
      labels.push(payload);
    },
    REMOVE_ALL_TASKS(state) {
      state.todos = [];
    },
    EDIT_TASK({ todos }, payload) {
      const target = todos.find((todo) => todo.id === payload.id);
      const idx = todos.findIndex((todo) => todo.id === payload.id);
      payload.complete = target.complete;
      payload.important = target.important;
      todos.splice(idx, 1, payload);
    },
    REMOVE_ALL_ARCHIVED_TASKS(state) {
      state.archiveTodos.map((item) => state.todos.push(item));
      state.archiveTodos = [];
    },
    REMOVE_CERTAIN_LABELS(state) {
      state.labels = state.labels.filter((label) =>
        state.todos.map((todo) => todo.label.id).includes(label.id)
      );
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
    REMOVE_LABEL({ labels }, itemId) {
      const idx = labels.findIndex(({ id }) => id === itemId);
      labels.splice(idx, 1);
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
      const idx = todos.findIndex(({ id }) => id === itemId);
      archiveTodos.push(target);
      todos.splice(idx, 1);
    },
    SET_SEARCH_VALUE(state, payload) {
      state.titleValue = payload;
    },
    SET_SEARCH_LABEL(state, payload) {
      state.labelValue = payload;
    },
    SET_TITLE(state, payload) {
      state.title = payload;
    },
    OPEN_LABEL_FORM(state) {
      state.isOpenLabelForm = true;
    },
    CLOSE_LABEL_FORM(state) {
      state.isOpenLabelForm = false;
    },
  },
  actions: {},
  getters: {
    getAllTodos: ({ todos }) => todos,
    getToastTitle: ({ toastTitle }) => toastTitle,
    getIsToastOpen: ({ isToastOpen }) => isToastOpen,
    getTitle: ({ title }) => title,
    getIsOpenLabelForm: ({ isOpenLabelForm }) => isOpenLabelForm,
    getSearchValue: ({ titleValue }) => titleValue,
    getLabelValue: ({ labelValue }) => labelValue,
    getAllTodosLength: ({ todos }) => todos.length,
    getAllArchiveTodos: ({ archiveTodos }) => archiveTodos,
    getAllLabels: ({ labels }) => labels,
    getAllLabelsLength: ({ labels }) => labels.length,
    getAllArchiveTodosLength: ({ archiveTodos }) => archiveTodos.length,
  },
};
