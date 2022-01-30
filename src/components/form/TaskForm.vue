<template>
  <transition name="fade">
    <BaseModal v-if="modelValue" @close="close">
      <form @submit.prevent="onSubmit">
        <BaseInput
          label="Введите заголовок задачи"
          class="w-full border p-2 my-2 rounded-md"
          v-model.trim="form.title"
          required
          placeholder="Введите заголовок задачи"
        />
        <BaseInput
          label="Введите описание задачи"
          class="w-full border p-2 my-2 rounded-md"
          v-model.trim="form.descr"
          required
          placeholder="Введите описание задачи"
        />
        <BaseSelect
          v-if="labels.length"
          v-model="form.label"
          label="Выберите метку"
          :options="labels"
          :id="labelId"
        />
        <span v-else class="mt-5 block text-gray-500">
          Созданных меток нет,
          <span
            @click="goToCreateLabel"
            class="text-purple-400 cursor-pointer hover:underline"
            >создайте метку</span
          >
        </span>
        <BaseButton
          type="submit"
          class="hover:text-opacity-50 p-2 mt-3 block ml-auto"
          variant="primary"
        >
          {{ buttonLabel }}
        </BaseButton>
      </form>
    </BaseModal>
  </transition>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "TaskForm",
  emits: ["submit", "update:modelValue"],
  props: {
    modelValue: {
      type: Boolean,
    },
    id: {
      type: Number,
    },
  },
  data() {
    return {
      form: {
        title: "",
        descr: "",
        label: {},
      },
      labelId: null,
    };
  },
  computed: {
    ...mapGetters({
      todos: "todos/getAllTodos",
      labels: "todos/getAllLabels",
    }),
    buttonLabel() {
      return this.id ? "Редактировать" : "Добавить";
    },
  },
  beforeUpdate() {
    this.isEdit();
  },
  methods: {
    ...mapMutations("todos", ["OPEN_LABEL_FORM"]),
    close() {
      this.$emit("update:modelValue", false);
      this.resetForm();
    },
    resetForm() {
      this.form = {
        title: "",
        descr: "",
        label: {},
      };
    },
    onSubmit() {
      if (!this.id) {
        this.form.id = Math.ceil(Math.random() * 100);
      }
      this.$emit("submit", this.form);
      this.resetForm();
    },
    isEdit() {
      this.resetForm();

      if (this.id) {
        const target = this.todos.find(({ id }) => id === this.id);
        this.form.title = target.title;
        this.form.descr = target.descr;
        this.form.id = target.id;
        this.labelId = target.label.id;
      }
    },
    goToCreateLabel() {
      this.$router.push("/label");
      this.OPEN_LABEL_FORM();
    },
  },
};
</script>
