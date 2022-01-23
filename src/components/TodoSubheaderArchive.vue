<template>
  <div
    :class="{ 'rounded-b-3xl': archivedTodosLength }"
    class="bg-gradient-to-tr from-indigo-500 to-purple-500 p-4 shadow-2xl flex justify-around items-center"
  >
    <div class="text-white text-lg text-right">
      Количество архивированных задач - {{ archivedTodosLength }}
    </div>
    <BaseButtonRemove @click="removeAllArchivedTasks" />
  </div>
  <TodoListArchive />
  <BaseToast v-if="isOpenToast" label="Все задачи из архива были удалены" />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoSubheaderArchive",
  data() {
    return {
      isOpenToast: false,
    };
  },
  computed: {
    ...mapGetters({
      archivedTodosLength: "todos/getAllArchiveTodosLength",
    }),
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_ARCHIVED_TASKS"]),
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
    removeAllArchivedTasks() {
      this.REMOVE_ALL_ARCHIVED_TASKS();
      this.openToast();
    },
  },
};
</script>
