<template>
  <div class="py-8">
    <TaskForm @submit="editTask" v-model="isFormOpen" :id="id" />
    <div class="flex justify-between items-center px-2">
      <div class="flex items-center">
        <BaseButton
          class="self-end mr-2"
          icon-class="hover:text-black text-gray-500"
          icon-name="chevronDown"
          @click="toggleDescr"
          v-if="!isOpenDescr"
        />
        <BaseButton
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
          class="text-gray-500 text-xl mr-10"
          >{{ todo.title }}</span
        >
        <span
          class="text-white text-xs rounded-2xl py-1 px-2"
          :style="{ background: todo.label.color }"
          >{{ todo.label.title }}</span
        >
      </div>
      <div class="relative" ref="submenu">
        <BaseButton
          icon-class="hover:text-black text-gray-500"
          icon-name="dots"
          @click="toggleSubmenu"
        />
        <TaskListItemSubmenu
          @delete="onRemove(todo.id)"
          @complete="onChange(todo.id, 'TOGGLE_COMPLETE')"
          @important="onChange(todo.id, 'TOGGLE_IMPORTANT')"
          @edit="onEdit(todo.id)"
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
  name: "TaskListItem",
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
      isFormOpen: false,
      id: null,
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
      "EDIT_TASK",
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
      const isSimilar = this.archivedTodos.some(({ title }) =>
        this.todos.map((todo) => Object.keys(todo)).includes(title)
      );

      if (!isSimilar) {
        this.ADD_TASK_TO_ARCHIVE(id);
        this.$emit("archiveTask");
        this.isOpenSubmenu = false;
      } else {
        this.$emit("archiveError");
      }

      this.$toast("Задача добавлена в архив");
    },
    onRemove(id) {
      this.REMOVE_TASK_BY_ID(id);
      this.$emit("removeTask");
      this.isOpenSubmenu = false;
      this.$toast("Задача удалена");
    },
    onEdit(id) {
      this.id = id;
      this.isFormOpen = true;
      this.isOpenSubmenu = false;
    },
    editTask(value) {
      this.EDIT_TASK(value);
      this.isFormOpen = false;
    },
    handleClick(e) {
      if (!this.$refs.submenu.contains(e.target)) {
        this.isOpenSubmenu = false;
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.handleClick);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleClick);
  },
};
</script>
