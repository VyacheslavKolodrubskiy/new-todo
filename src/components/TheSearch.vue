<template>
  <div class="px-4 pb-2">
    <div class="flex justify-between relative">
      <BaseInput
        class="w-full border p-2 my-2 rounded-md"
        v-model.trim="title"
        placeholder="Введите название задачи"
      />
      <BaseButton
        class="absolute right-2 top-4"
        icon-class="hover:text-black text-gray-500"
        icon-name="search"
        v-if="!title.length"
      />
      <BaseButton
        class="absolute right-2 top-4"
        v-else
        icon-class="text-red-500"
        icon-name="close"
        @click="title = ''"
      />
    </div>
    <div>
      <BaseSelect v-if="hasTodosSomeLabel" v-model="label" :options="labels" />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheSearch",
  data() {
    return {
      title: "",
      label: {},
    };
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
      labels: "todos/getAllLabels",
      titleValue: "todos/getSearchValue",
    }),
    hasTodosSomeLabel() {
      return this.todos.some(({ label }) => label.title);
    },
  },
  methods: {
    ...mapMutations("todos", ["SET_SEARCH_VALUE", "SET_SEARCH_LABEL"]),
  },
  created() {
    this.title = this.titleValue;
  },
  watch: {
    title() {
      this.SET_SEARCH_VALUE(this.title);
    },
    label() {
      if (!this.label.title) {
        this.label.title = "";
      }
      this.SET_SEARCH_LABEL(this.label.title);
    },
  },
};
</script>
