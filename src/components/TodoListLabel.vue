<template>
  <ul class="mt-8 divide-y">
    <BaseToast v-if="isOpenToast" label="Метка удалена" />
    <li v-for="label in labels" :key="label.id">
      <TodoListItemLabel @remove-task="openToast" :label="label" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoListLabel",
  data() {
    return {
      isOpenToast: false,
    };
  },
  computed: {
    ...mapGetters({
      labels: "todos/getAllLabels",
    }),
  },
  methods: {
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
  },
};
</script>
