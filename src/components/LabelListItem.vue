<template>
  <div class="py-8">
    <div class="flex justify-between items-center px-2">
      <span
        :style="{ background: label.color }"
        class="text-white text-sm rounded-2xl py-1 px-2"
        >{{ label.title }}</span
      >
      <BaseButton
        icon-class="hover:text-red-500 "
        icon-name="trash"
        @click="onRemove(label.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "LabelListItem",
  props: {
    label: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
    }),
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_LABEL"]),
    onRemove(id) {
      const isTodosHasLabel = this.todos.some((todo) => todo.label.id === id);

      if (isTodosHasLabel) {
        this.$emit("cantRemove");
      } else {
        this.$emit("removeLabel");
        this.REMOVE_LABEL(id);
      }
    },
  },
};
</script>
