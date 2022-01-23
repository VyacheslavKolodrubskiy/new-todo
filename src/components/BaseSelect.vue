<template>
  <label class="text-gray-500" v-if="label"
    >{{ label }} <span v-if="required" class="text-red-500">*</span></label
  >
  <div
    class="border p-2 rounded-lg my-2 flex justify-between items-center relative"
    @click.self="toggleOptions"
  >
    <div class="text-gray-400">{{ optionSelected }}</div>
    <BaseButton type="button" @click="toggleOptions">
      <BaseIcon class="text-gray-500" name="chevronDown" />
    </BaseButton>
    <ul
      v-if="isOptionsVisible"
      class="border rounded-lg p-2 text-gray-500 absolute w-full bg-white top-full left-0 z-10 mt-2 divide-y"
    >
      <li
        v-for="option in options"
        :key="option.id"
        class="hover:underline cursor-pointer py-2"
        @click="onSelected(option.title)"
      >
        {{ option.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
  data() {
    return {
      isOptionsVisible: null,
      optionSelected: null,
    };
  },
  methods: {
    onSelected(value) {
      this.$emit("update:modelValue", value);
      this.optionSelected = value;
      this.isOptionsVisible = false;
    },
    toggleOptions() {
      this.isOptionsVisible = !this.isOptionsVisible;
    },
  },
};
</script>
