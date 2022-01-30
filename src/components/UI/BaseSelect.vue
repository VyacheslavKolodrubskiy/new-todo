<template>
  <div>
    <label class="text-gray-500" v-if="label"
      >{{ label }} <span v-if="required" class="text-red-500">*</span></label
    >
    <div ref="select" :class="classes" @click.self="toggleOptions">
      <div class="text-gray-400">{{ optionSelected }}</div>
      <BaseButton
        v-if="!optionSelected"
        icon-class="text-gray-500"
        icon-name="chevronDown"
        @click="toggleOptions"
      />

      <BaseButton
        v-else
        icon-class="text-red-500"
        icon-name="close"
        @click="resetSelected"
      />

      <ul v-if="isOptionsVisible" :class="listClasses">
        <li
          v-for="option in options"
          :key="option.id"
          class="hover:underline cursor-pointer py-2"
          @click="onSelected(option)"
        >
          {{ option.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "BaseSelect",
  emits: ["update:modelValue"],
  props: {
    modelValue: {
      type: Object,
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
    id: {
      type: Number,
    },
  },
  data() {
    return {
      isOptionsVisible: null,
      optionSelected: "",
      listClasses: [
        "border rounded-lg p-2 text-gray-500 absolute w-full bg-white top-full left-0 z-10 mt-2 divide-y",
      ],
      classes: [
        "border p-2 rounded-lg my-2 flex justify-between items-center relative",
      ],
    };
  },
  computed: {
    ...mapGetters({
      labelValue: "todos/getLabelValue",
    }),
  },
  methods: {
    resetSelected() {
      this.optionSelected = "";
      this.$emit("update:modelValue", {});
    },
    onSelected(value) {
      this.$emit("update:modelValue", value);
      this.optionSelected = value.title;
      this.isOptionsVisible = false;
    },
    toggleOptions() {
      this.isOptionsVisible = !this.isOptionsVisible;
    },
    isEdit() {
      if (this.id) {
        const target = this.options.find((item) => item.id === this.id);
        this.optionSelected = target.title;
        this.$emit("update:modelValue", target);
      }
    },
    handleSelect(e) {
      if (!this.$refs.select.contains(e.target)) {
        this.isOptionsVisible = false;
      }
    },
  },
  mounted() {
    this.isEdit();
    window.addEventListener("click", this.handleSelect);
  },
  beforeUnmount() {
    window.removeEventListener("click", this.handleSelect);
  },
};
</script>
