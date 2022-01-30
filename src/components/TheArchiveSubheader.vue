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
  <TheArchiveList />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheArchiveSubheader",
  computed: {
    ...mapGetters({
      archivedTodosLength: "todos/getAllArchiveTodosLength",
    }),
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_ARCHIVED_TASKS"]),
    removeAllArchivedTasks() {
      this.REMOVE_ALL_ARCHIVED_TASKS();
    },
  },
};
</script>
