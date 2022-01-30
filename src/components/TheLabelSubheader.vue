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
        :class="{ 'animate-bounce': !lablesLength && !isFormOpen }"
        @click="openModal"
      />
      <BaseButtonRemove @click="removeAllLabels" />
    </div>
  </div>
  <TheLabelList />
  <LabelForm @submit="addNewLabel" v-model="isFormOpen" />
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "TheLabelSubheader",
  data() {
    return {
      isFormOpen: false,
    };
  },
  computed: {
    ...mapGetters({
      lablesLength: "todos/getAllLabelsLength",
      labels: "todos/getAllLabels",
      todos: "todos/getAllTodos",
      isOpenLabelForm: "todos/getIsOpenLabelForm",
    }),
  },
  mounted() {
    this.openLabelForm();
  },
  methods: {
    ...mapMutations("todos", [
      "REMOVE_CERTAIN_LABELS",
      "ADD_NEW_LABEL",
      "CLOSE_LABEL_FORM",
    ]),
    openModal() {
      this.isFormOpen = true;
    },
    addNewLabel(value) {
      const isSimilar = this.labels.some(({ title }) => title === value.title);
      if (isSimilar) {
        this.isFormOpen = false;
        return;
      }

      this.ADD_NEW_LABEL(value);
      this.isFormOpen = false;
      this.$router.push("/");
    },
    removeAllLabels() {
      this.REMOVE_CERTAIN_LABELS();
    },
    openLabelForm() {
      this.isOpenLabelForm && (this.isFormOpen = true);
      this.CLOSE_LABEL_FORM();
    },
  },
};
</script>
