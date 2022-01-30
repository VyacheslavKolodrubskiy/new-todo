<template>
  <transition name="fade">
    <BaseModal v-if="modelValue" @close="close">
      <form @submit.prevent="onSubmit">
        <div>
          <BaseInput
            label="Введите название метки"
            class="w-full border p-2 my-2 rounded-md"
            v-model.trim="form.title"
            required
            placeholder="Введите название метки"
          />
        </div>
        <div>
          <span>Выбрите цвет метки</span> <span class="text-red-500">*</span>
          <ul class="flex mt-4">
            <li
              v-for="c in colors"
              :style="{
                background: c.color,
                transform: c.selected ? 'translateY(-5px)' : 'translateY(0px)',
              }"
              :key="c.color"
              class="rounded-full mr-2 w-4 h-4 cursor-pointer"
              @click="onColor(c)"
            ></li>
          </ul>
          <div v-if="isColorError" class="text-red-500 mt-4">
            Вы не выбрали цвет метки
          </div>
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
  </transition>
</template>

<script>
export default {
  name: "LabelForm",
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
        color: "",
      },
      colors: [
        { color: "rgb(96,165,250)", selected: false },
        { color: "rgb(122,97,244)", selected: false },
        { color: "rgb(248,113,113)", selected: false },
      ],
      isColorError: null,
    };
  },
  methods: {
    close() {
      this.$emit("update:modelValue", false);
      this.resetForm();
      this.resetColorsSelect();
    },
    resetColorsSelect() {
      this.colors.forEach((item) => (item.selected = false));
    },
    onColor(value) {
      this.form.color = value.color;
      this.resetColorsSelect();
      value.selected = true;
    },

    resetForm() {
      this.form = {
        title: "",
        color: "",
      };
    },
    onSubmit() {
      if (!this.form.color) {
        this.isColorError = true;

        setTimeout(() => {
          this.isColorError = false;
        }, 2000);

        return;
      }
      this.resetColorsSelect();
      this.isColorError = false;
      this.form.id = Math.ceil(Math.random() * 100);
      this.$emit("submit", this.form);
      this.resetForm();
    },
  },
};
</script>
