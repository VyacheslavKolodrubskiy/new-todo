<template>
  <div>
    <div :class="classes">
      <TitleEditForm @submit="editTitle" v-model="isTitleFormOpen" />
      <p
        class="uppercase text-white text-5xl font-bold mb-4 cursor-pointer"
        @click="isTitleFormOpen = true"
      >
        {{ title }}
      </p>
      <div class="flex justify-between">
        <div>
          <div class="text-white mb-2 text-2xl">
            <b>{{ getDate.day }}, </b>
            <small>{{ getDate.date }} </small>
          </div>
          <span class="text-white text-lg">{{ getDate.months }}, </span>
          <span class="text-white">{{ getDate.year }} год</span>
        </div>
        <div class="text-white text-lg self-end">{{ countTodos }}</div>
      </div>
      <div class="mt-5 flex justify-between">
        <BaseButtonAdd
          :class="{ 'animate-bounce': !todosLength && !isTaskFormOpen }"
          @click="openModal"
        />
        <BaseButtonRemove @click="onRemove" />
      </div>
      <TaskForm @submit="addNewTask" v-model="isTaskFormOpen" />
    </div>
    <TheSearch v-if="todosLength" />
    <TheTaskList />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheTaskSubheader",
  data() {
    return {
      isTaskFormOpen: false,
      isTitleFormOpen: false,
      title: "",
      days: [
        "Воскресенье",
        "Понедельник",
        "Вторник",
        "Среда",
        "Четверг",
        "Пятница",
        "Суббота",
      ],
      months: [
        "Январь",
        "Февраль",
        "Март",
        "Апрель",
        "Май",
        "Июнь",
        "Июль",
        "Август",
        "Сентябрь",
        "Октябрь",
        "Ноябрь",
        "Декабрь",
      ],
    };
  },
  mounted() {
    this.setTitle();
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
      archivedTodos: "todos/getAllArchiveTodos",
      todosLength: "todos/getAllTodosLength",
      titleApp: "todos/getTitle",
    }),
    getDate() {
      return {
        day: this.days[new Date().getDay()],
        months: this.months[new Date().getMonth()],
        date: new Date().getDate(),
        year: new Date().getFullYear(),
      };
    },
    classes() {
      return [
        "bg-gradient-to-tr from-indigo-500 to-purple-500 p-4 shadow-2xl",
        this.todosLength && "rounded-b-3xl",
      ];
    },
    countTodos() {
      let lastWord = "";
      if (this.todosLength === 1) {
        lastWord = "a";
      }
      if (this.todosLength >= 2 && this.todosLength <= 4) {
        lastWord = "и";
      }
      return `${this.todosLength} - Задач${lastWord}`;
    },
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_TASKS", "ADD_NEW_TASK", "SET_TITLE"]),
    openModal() {
      this.isTaskFormOpen = true;
    },
    addNewTask(value) {
      const isSimilar = this.todos.some(({ title }) => title === value.title);
      const isSimilarArchived = this.archivedTodos.some(
        ({ title }) => title === value.title
      );
      if (isSimilar) {
        this.isTaskFormOpen = false;
        return;
      }

      if (isSimilarArchived) {
        this.isTaskFormOpen = false;
        return;
      }

      this.ADD_NEW_TASK(value);
      this.isTaskFormOpen = false;
    },
    onRemove() {
      this.$toast("Все задачи были удалены");
      this.REMOVE_ALL_TASKS();
    },
    editTitle(value) {
      this.SET_TITLE(value);
      this.setTitle();
    },
    setTitle() {
      document.title = this.titleApp || "Todo App";
      this.title = this.titleApp || "Todo App";
    },
    setLastWord(word, n) {
      console.log(word);
      console.log(n);
    },
  },
};
</script>
