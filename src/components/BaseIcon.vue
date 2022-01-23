<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    v-html="path"
  ></svg>
</template>

<script>
import icons from "../icons";

export default {
  name: "BaseIcon",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      path: icons[this.name],
    };
  },
};
</script>
