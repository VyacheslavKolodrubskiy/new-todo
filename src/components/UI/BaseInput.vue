<template>
  <label class="text-gray-500" v-if="label"
    >{{ label }} <span v-if="required" class="text-red-500">*</span></label
  >
  <input
    :value="modelValue"
    v-bind="$attrs"
    :type="type"
    @input="$emit('update:modelValue', $event.target.value)"
    :placeholder="placeholder"
    :required="required"
  />
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseInput",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
