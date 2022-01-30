<template>
  <ul class="mt-8 divide-y">
    <li v-for="label in labels" :key="label.id">
      <LabelListItem :label="label" />
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TheLabelList",
  computed: {
    ...mapGetters({
      labels: "todos/getAllLabels",
    }),
  },
};
</script>
