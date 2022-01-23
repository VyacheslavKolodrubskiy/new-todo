<template>
  <BaseModal v-if="modelValue" @close="close">
    <form @submit.prevent="onSubmit">
      <div>
        <BaseInput
          label="Введите заголовок задачи"
          class="w-full border p-2 my-2 rounded-md"
          v-model.trim="form.title"
          required
          placeholder="Введите заголовок задачи"
        />
      </div>
      <div>
        <BaseInput
          label="Введите описание задачи"
          class="w-full border p-2 my-2 rounded-md"
          v-model.trim="form.descr"
          required
          placeholder="Введите описание задачи"
        />
      </div>
      <div>
        <!-- <BaseSelect label="Выберите метку" /> -->
      </div>
      <div class="text-right mt-3">
        <BaseButton
          type="submit"
          class="hover:text-opacity-50 p-2"
          variant="primary"
        >
          Добавить
        </BaseButton>
      </div>
    </form>
  </BaseModal>
</template>

<script>
export default {
  name: "TaskForm",
  emits: ["submit", "update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
    },
  },
  data() {
    return {
      form: {
        title: "",
        descr: "",
        labelSelected: "",
      },
    };
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
    },
    onSubmit() {
      this.$emit("submit", this.form);
      this.form = {
        title: "",
        descr: "",
        labelSelected: "",
      };
    },
  },
};
</script>
