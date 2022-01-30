<template>
  <transition name="fade">
    <BaseModal v-if="modelValue" @close="close">
      <form @submit.prevent="onSubmit">
        <BaseInput
          label="Введите название заголовка"
          class="w-full border p-2 my-2 rounded-md"
          v-model.trim="title"
          required
          placeholder="Введите название заголовка"
        />
        <BaseButton
          type="submit"
          class="hover:text-opacity-50 p-2 mt-3 block ml-auto"
          variant="primary"
        >
          Редактировать
        </BaseButton>
      </form>
    </BaseModal>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TitleEditForm",
  emits: ["submit", "update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  data() {
    return {
      title: "",
    };
  },
  computed: {
    ...mapGetters({
      titleApp: "todos/getTitle",
    }),
  },

  methods: {
    close() {
      this.$emit("update:modelValue", false);
      this.resetForm();
    },
    resetForm() {
      this.title = "";
    },
    onSubmit() {
      this.$emit("submit", this.title);
      this.close();
    },
  },
};
</script>
