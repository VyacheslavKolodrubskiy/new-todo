<template>
  <form @submit.prevent="onSubmit">
    <h2 class="mb-20 text-center uppercase text-blue-400 font-black text-3xl">
      Авторизация
    </h2>
    <BaseInput
      label="Введите имя"
      class="w-full border p-2 my-2 rounded-md"
      required
      v-model="form.name"
      placeholder="Введите имя"
    />
    <div class="relative">
      <BaseInput
        :type="inputType"
        label="Введите пароль"
        class="w-full border p-2 my-2 rounded-md"
        required
        v-model="form.password"
        placeholder="Введите пароль"
      />
      <BaseButton
        v-if="isTypePassword"
        class="absolute top-10 right-5"
        icon-class="hover:text-black text-gray-500"
        icon-name="eyeOf"
        @click="toggleType"
      />
      <BaseButton
        v-else
        class="absolute top-10 right-5"
        icon-class="hover:text-black text-gray-500"
        icon-name="eye"
        @click="toggleType"
      />
    </div>
    <BaseButton
      type="submit"
      class="hover:text-opacity-50 p-2 mt-3 block ml-auto flex"
      variant="primary"
      :icon-name="iconName"
      icon-class="mr-2 animate-spin"
    >
      Добавить
    </BaseButton>
  </form>
</template>

<script>
export default {
  name: "AuthForm",
  emits: ["submit"],
  data() {
    return {
      form: {
        name: "",
        password: "",
      },
      isTypePassword: true,
      isShowLoadIcon: false,
    };
  },
  computed: {
    inputType() {
      return this.isTypePassword ? "password" : "text";
    },
    iconName() {
      return this.isShowLoadIcon ? "refresh" : "";
    },
  },
  methods: {
    onSubmit() {
      this.$emit("submit", this.form);
      this.isShowLoadIcon = true;

      setTimeout(() => (this.isShowLoadIcon = false), 2000);
    },
    toggleType() {
      this.isTypePassword = !this.isTypePassword;
    },
  },
};
</script>
