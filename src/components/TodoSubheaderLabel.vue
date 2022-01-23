<template>
  <div
    :class="{ 'rounded-b-3xl': lablesLength }"
    class="bg-gradient-to-tr from-indigo-500 to-purple-500 p-4 shadow-2xl"
  >
    <div class="text-white text-lg text-right">
      Количество созданных меток - {{ lablesLength }}
    </div>
    <div class="mt-5 flex justify-between">
      <BaseButtonAdd
        :class="{ 'animate-bounce': !isFormOpen }"
        @click="openModal"
      />
      <BaseButtonRemove @click="removeAllLabels" />
    </div>
  </div>
  <TodoListLabel />
  <LabelForm @submit="addNewLabel" v-model="isFormOpen" />
  <BaseToast v-if="isOpenToast" label="Все метки были удалены" />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TodoSubheaderLabel",
  data() {
    return {
      isOpenToast: false,
      isFormOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      lablesLength: "todos/getAllLabelsLength",
    }),
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_ALL_LABELS", "ADD_NEW_LABEL"]),
    openToast() {
      this.isOpenToast = true;
      setTimeout(() => (this.isOpenToast = false), 2000);
    },
    openModal() {
      this.isFormOpen = true;
    },
    addNewLabel(value) {
      this.ADD_NEW_LABEL(value);
      this.isFormOpen = false;
    },
    removeAllLabels() {
      this.REMOVE_ALL_LABELS();
      this.openToast();
    },
  },
};
</script>
