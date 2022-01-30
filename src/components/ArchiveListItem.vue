<template>
  <div class="py-8">
    <div class="flex justify-between items-center px-2">
      <div class="flex items-center">
        <BaseButton
          class="self-end mr-3"
          icon-class="hover:text-black text-gray-500"
          icon-name="chevronDown"
          @click="toggleDescr"
          v-if="!isOpenDescr"
        />
        <BaseButton
          class="self-end mr-3"
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
          v-if="todo.label.title"
          class="text-white text-xs rounded-2xl py-1 px-2"
          :style="{ background: todo.label.color }"
          >{{ todo.label.title }}</span
        >
      </div>
      <div class="relative">
        <BaseButton
          icon-class="hover:text-red-500 "
          icon-name="trash"
          @click="onRemove(todo.id)"
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
import { mapMutations } from "vuex";

export default {
  name: "ArchiveListItem",
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      isOpenDescr: false,
    };
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_TASK_FROM_ARCHIVE"]),
    toggleDescr() {
      this.isOpenDescr = !this.isOpenDescr;
    },

    onRemove(id) {
      this.$emit("removeTask");
      this.REMOVE_TASK_FROM_ARCHIVE(id);
    },
  },
};
</script>
