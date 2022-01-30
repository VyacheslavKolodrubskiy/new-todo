<template>
  <ul class="mt-8 divide-y">
    <li v-for="archivedTodo in archivedTodos" :key="archivedTodo.id">
      <ArchiveListItem :todo="archivedTodo" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheArchiveList",
  computed: {
    ...mapGetters({
      archivedTodos: "todos/getAllArchiveTodos",
    }),
  },
  methods: {},
};
</script>
