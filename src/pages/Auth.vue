<template>
  <div class="p-20">
    <AuthForm @submit="submit" />
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  name: "Auth",
  computed: {
    ...mapGetters({
      name: "auth/getUserName",
      password: "auth/getUserPassword",
    }),
  },

  methods: {
    ...mapMutations("auth", ["SET_USER_LOGIN"]),
    resetFormValue(value) {
      setTimeout(() => {
        value.name = "";
        value.password = "";
      }, 2000);
    },
    submit(value) {
      if (this.password === value.password && this.name !== value.name) {
        this.resetFormValue(value);
      }

      if (this.name === value.name && this.password !== value.password) {
        this.resetFormValue(value);
      }

      if (this.name !== value.name && this.password !== value.password) {
        this.resetFormValue(value);
      }

      if (this.name === value.name && this.password === value.password) {
        setTimeout(() => {
          this.SET_USER_LOGIN();
          this.resetFormValue(value);
          this.$router.push("/");
        }, 2000);
      }
    },
  },
};
</script>
