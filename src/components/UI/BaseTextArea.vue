<template>
  <label class="text-gray-500" v-if="label"
    >{{ label }} <span v-if="required" class="text-red-500">*</span></label
  >
  <textarea
    v-bind="$attrs"
    :value="modelValue"
    :placeholder="placeholder"
    :required="required"
    @input="$emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "BaseTextArea",
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
