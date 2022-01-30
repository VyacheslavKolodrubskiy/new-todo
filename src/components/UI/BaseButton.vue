<template>
  <button :type="type" :class="classes">
    <BaseIcon
      v-if="iconName && iconBefore"
      :name="iconName"
      :class="iconClass"
    />
    <slot />
    <BaseIcon
      v-if="iconName && iconAfter"
      :name="iconName"
      :class="iconClass"
    />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    type: {
      type: String,
      default: "button",
    },
    variant: {
      type: String,
    },
    iconName: {
      type: String,
    },
    iconClass: {
      type: String,
    },
    iconBefore: {
      type: Boolean,
      default: true,
    },
    iconAfter: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    classes() {
      const defaultColor = ["  text-white"];

      switch (this.variant) {
        case "primary":
          defaultColor.push("bg-blue-400");
          break;
        case "danger":
          defaultColor.push("bg-red-400");
          break;
        case "warning":
          defaultColor.push("bg-yellow-400");
          break;
        default:
          break;
      }
      return defaultColor;
    },
  },
};
</script>
