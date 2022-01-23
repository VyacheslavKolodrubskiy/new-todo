<template>
  <ul class="divide-y">
    <BaseToast v-if="isOpenToast" :label="toastLabel" />
    <li v-for="todo in todos" :key="todo.id">
      <TodoListItem
        @archive-task="onArchive"
        @archive-error="onArchiveError"
        @remove-task="onRemove"
        :todo="todo"
      />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  data() {
    return {
      isOpenToast: false,
      toastLabel: "",
    };
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
    }),
  },
  methods: {
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
    onArchiveError() {
      this.openToast();
      this.toastLabel = "Задача с таким название уже есть в архиве";
    },
    onArchive() {
      this.openToast();
      this.toastLabel = "Задача добавлена в архив";
    },
    onRemove() {
      this.openToast();
      this.toastLabel = "Задача удалена";
    },
  },
};
</script>
