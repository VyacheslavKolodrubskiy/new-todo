<template>
  <ul class="divide-y">
    <li v-for="todo in filteredTodos" :key="todo.id">
      <TaskListItem :todo="todo" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheTaskList",
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
      titleValue: "todos/getSearchValue",
      labelValue: "todos/getLabelValue",
    }),
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.labelValue && !todo.label.title) {
          return false;
        }
        return (
          (todo.title.toLowerCase().includes(this.titleValue.toLowerCase()) &&
            todo.label.title &&
            todo.label.title
              .toLowerCase()
              .includes(this.labelValue.toLowerCase())) ||
          (!todo.label.title && todo)
        );
      });
    },
  },
};
</script>
