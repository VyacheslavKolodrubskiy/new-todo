<template>
  <teleport to="body">
    <div
      class="absolute top-40 right-96 bg-white p-2 rounded-lg shadow-xl text-gray-500"
    >
      {{ label }}
    </div>
  </teleport>
</template>

<script>
export default {
  name: "BaseToast",

  props: {
    label: {
      type: String,
      default: "",
    },
  },
};
</script>
