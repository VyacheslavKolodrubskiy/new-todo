<template>
  <div
    :class="{ 'rounded-b-3xl': archivedTodosLength }"
    class="bg-gradient-to-tr from-indigo-500 to-purple-500 p-4 shadow-2xl flex justify-around items-center"
  >
    <div class="text-white text-lg text-right">
      {{ numberOfArchivedTask }}
    </div>
    <BaseButtonRemove @click="removeAllArchivedTasks" />
  </div>
  <TheArchiveList />
</template>

<script>
import { setRightLastWord } from "@/utils/rightLastWord";
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheArchiveSubheader",
  computed: {
    ...mapGetters({
      archivedTodosLength: "todos/getAllArchiveTodosLength",
    }),
    numberOfArchivedTask() {
      const rightWord = setRightLastWord(
        this.archivedTodosLength,
        "Архивированная Задача",
        "Архивированные Задачи",
        "Архивированных Задач"
      );
      return `${this.archivedTodosLength} - ${rightWord}`;
    },
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_ARCHIVED_TASKS"]),
    removeAllArchivedTasks() {
      this.REMOVE_ALL_ARCHIVED_TASKS();
    },
  },
};
</script>
