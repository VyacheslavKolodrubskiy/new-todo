<template>
  <button :class="classes"><slot /></button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    variant: {
      type: String,
      default: "",
    },
  },
  computed: {
    classes() {
      const defaultColor = [];

      switch (this.variant) {
        case "primary":
          defaultColor.push("bg-blue-400 text-white");
          break;
        case "danger":
          defaultColor.push("bg-red-400 text-white");
          break;
        case "warning":
          defaultColor.push("bg-yellow-400 text-white");
          break;
        default:
          break;
      }
      return defaultColor;
    },
  },
};
</script>
