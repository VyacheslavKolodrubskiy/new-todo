<template>
  <div
    class="bg-white border p-2 rounded-lg shadow-lg flex justify-between z-20 absolute top-full right-0"
  >
    <div class="px-2">
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="edit"
        @click="$emit('edit')"
      />
    </div>
    <div class="px-2">
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="check"
        @click="$emit('complete')"
      />
    </div>

    <div class="px-2">
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="exclamation"
        @click="$emit('important')"
      />
    </div>
    <div class="px-2">
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="archive"
        @click="$emit('archive')"
      />
    </div>
    <div class="px-2">
      <ButtonWrapperWithIcon
        icon-class="hover:text-black text-gray-500"
        icon-name="trash"
        @click="$emit('delete')"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSubmenu",
};
</script>
