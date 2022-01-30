<template>
  <div :class="classes">
    <BaseButton
      v-for="button in buttons"
      :key="button.name"
      icon-class="hover:text-black text-gray-500"
      :icon-name="button.name"
      @click="$emit(button.emit)"
    />
  </div>
</template>

<script>
export default {
  name: "TaskListItemSubmenu",
  emits: ["edit", "complete", "important", "archive", "delete"],
  data() {
    return {
      isOpenSubmenu: false,
      buttons: [
        { name: "edit", emit: "edit" },
        { name: "check", emit: "complete" },
        { name: "exclamation", emit: "important" },
        { name: "archive", emit: "archive" },
        { name: "trash", emit: "delete" },
      ],
    };
  },
  computed: {
    classes() {
      return [
        "bg-white border space-x-4 p-2 rounded-lg shadow-lg flex justify-between z-20 absolute top-full right-0",
      ];
    },
  },
};
</script>
