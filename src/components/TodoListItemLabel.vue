<template>
  <div class="py-8">
    <div class="flex justify-between items-center px-2">
      <span
        :style="{ background: label.color }"
        class="text-white text-sm rounded-2xl p-2"
        >{{ label.title }}</span
      >
      <ButtonWrapperWithIcon
        icon-class="hover:text-red-500 "
        icon-name="trash"
        @click="onRemove(label.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "TodoListItemLabel",
  props: {
    label: {
      type: Object,
      default: () => {},
    },
  },
  created() {
    console.log(this.label);
  },
  methods: {
    ...mapMutations("todos", ["REMOVE_LABEL"]),
    onRemove(id) {
      this.$emit("removeTask");
      this.REMOVE_LABEL(id);
    },
  },
};
</script>
