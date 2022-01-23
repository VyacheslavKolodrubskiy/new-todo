<template>
  <div class="py-8">
    <div class="flex justify-between items-center px-2">
      <div class="flex items-center">
        <ButtonWrapperWithIcon
          class="self-end mr-2"
          icon-class="hover:text-black text-gray-500"
          icon-name="chevronDown"
          @click="toggleDescr"
          v-if="!isOpenDescr"
        />
        <ButtonWrapperWithIcon
          class="self-end mr-2"
          icon-class="hover:text-black text-gray-500"
          icon-name="chevronUp"
          @click="toggleDescr"
          v-else
        />
        <span
          :class="{
            'line-through': todo.complete,
            'text-purple-400': todo.important,
            'font-bold': todo.important,
          }"
          class="text-gray-500 text-xl"
          >{{ todo.title }}</span
        >
      </div>
      <div class="relative">
        <ButtonWrapperWithIcon
          icon-class="hover:text-black text-gray-500"
          icon-name="dots"
          @click="toggleSubmenu"
        />
        <BaseSubmenu
          @delete="onRemove(todo.id)"
          @complete="onChange(todo.id, 'TOGGLE_COMPLETE')"
          @important="onChange(todo.id, 'TOGGLE_IMPORTANT')"
          @archive="onArchive(todo.id)"
          v-if="isOpenSubmenu"
        />
      </div>
    </div>
    <div
      :class="{
        'line-through': todo.complete,
        'text-purple-400': todo.important,
        'font-bold': todo.important,
      }"
      v-if="isOpenDescr"
      class="text-lg text-gray-500 py-4 pl-10 pr-4"
    >
      {{ todo.descr }}
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoListItem",
  emits: ["archiveTask", "removeTask", "archiveError"],
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpenSubmenu: false,
      isOpenDescr: false,
    };
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
      archivedTodos: "todos/getAllArchiveTodos",
    }),
  },
  methods: {
    ...mapMutations("todos", [
      "REMOVE_TASK_BY_ID",
      "TOGGLE_COMPLETE",
      "TOGGLE_IMPORTANT",
      "ADD_TASK_TO_ARCHIVE",
    ]),
    toggleSubmenu() {
      this.isOpenSubmenu = !this.isOpenSubmenu;
    },
    toggleDescr() {
      this.isOpenDescr = !this.isOpenDescr;
    },
    onChange(id, mutationName) {
      this[mutationName](id);
      this.isOpenSubmenu = false;
    },
    onArchive(id) {
      const similar = this.archivedTodos.some(({ title }) =>
        this.todos.map((todo) => Object.keys(todo)).includes(title)
      );

      if (!similar) {
        this.ADD_TASK_TO_ARCHIVE(id);
        this.$emit("archiveTask");
        this.isOpenSubmenu = false;
      } else {
        this.$emit("archiveError");
      }
    },
    onRemove(id) {
      this.REMOVE_TASK_BY_ID(id);
      this.$emit("removeTask");
      this.isOpenSubmenu = false;
    },
  },
  mounted() {
    window.addEventListener("click", (e) => {
      if (!this.$el.contains(e.target)) {
        this.isOpenSubmenu = false;
      }
    });
  },
};
</script>
