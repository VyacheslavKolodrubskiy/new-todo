<template>
  <div
    class="fixed inset-0 z-20 bg-black bg-opacity-80 focus:outline-none shadow-2xl"
    @click.self="close"
  >
    <div class="bg-white max-w-sm mx-auto my-8 rounded-md">
      <div class="p-2 text-right">
        <BaseButton
          icon-class="hover:text-black text-gray-500"
          icon-name="close"
          @click="close"
        />
      </div>
      <div class="p-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
