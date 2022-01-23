<template>
  <div class="py-8">
    <div class="flex justify-between items-center px-2">
      <div class="flex items-center">
        <ButtonWrapperWithIcon
          class="self-end mr-3"
          icon-class="hover:text-black text-gray-500"
          icon-name="chevronDown"
          @click="toggleDescr"
          v-if="!isOpenDescr"
        />
        <ButtonWrapperWithIcon
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
          class="text-gray-500 text-xl"
          >{{ todo.title }}</span
        >
      </div>
      <div class="relative">
        <ButtonWrapperWithIcon
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
  name: "TodoListItemArchive",
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
