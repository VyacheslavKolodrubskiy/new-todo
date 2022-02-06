<template>
  <div class="fixed top-20 left-1/2">
    <ul class="space-y-8">
      <transition-group name="fade">
        <li v-for="toast in toasts" :key="toast">
          <span class="bg-white p-3 rounded-lg text-gray-500"
            >{{ toast }}
          </span>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BaseToast",
  inject: ["toasts"],
};
</script>
