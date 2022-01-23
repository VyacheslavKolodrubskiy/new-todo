<template>
  <div class="px-4">
    <div class="flex justify-between">
      <BaseInput
        class="w-full border p-2 my-2 rounded-md"
        v-model.trim="filters.title"
        placeholder="Введите название задачи"
      />
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="search"
        v-if="!filters.title.length"
      />
      <ButtonWrapperWithIcon
        v-else
        icon-class="text-red-500"
        icon-name="close"
        @click="filters.title = ''"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoSearch",
  data() {
    return {
      filters: {
        title: "",
        label: "",
      },
    };
  },
};
</script>
