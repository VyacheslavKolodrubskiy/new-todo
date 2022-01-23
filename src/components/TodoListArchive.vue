<template>
  <ul class="mt-8 divide-y">
    <BaseToast v-if="isOpenToast" label="Задача удалена из архива" />
    <li v-for="archivedTodo in archivedTodos" :key="archivedTodo.id">
      <TodoListItemArchive @remove-task="openToast" :todo="archivedTodo" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoListArchive",
  data() {
    return {
      isOpenToast: false,
    };
  },
  computed: {
    ...mapGetters({
      archivedTodos: "todos/getAllArchiveTodos",
    }),
  },
  methods: {
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
  },
};
</script>
