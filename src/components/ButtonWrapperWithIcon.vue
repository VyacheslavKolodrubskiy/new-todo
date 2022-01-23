<template>
  <BaseButton>
    <BaseIcon :class="iconClass" :name="iconName" />
  </BaseButton>
</template>

<script>
export default {
  name: "ButtonWrapperWithIcon",
  props: {
    iconName: {
      type: String,
      default: "",
    },
    iconClass: {
      type: String,
      default: "",
    },
  },
};
</script>
