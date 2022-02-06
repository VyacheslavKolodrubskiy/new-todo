<template>
  <div class="max-w-xl mx-auto bg-white rounded-b-md shadow-2xl">
    <TheHeader v-if="isAuth" />
    <BaseToast />
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",
  methods: {
    onResize() {
      if (window.innerHeight >= 576) {
        this.$el.classList.add("mt-60", "rounded-t-md");
      } else {
        this.$el.classList.remove("mt-60", "rounded-t-md");
      }
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "auth/getUserIsAuth",
    }),
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>
