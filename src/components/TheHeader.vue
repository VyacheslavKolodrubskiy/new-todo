<template>
  <div class="p-4 flex justify-around items-center">
    <RouterLink
      v-for="link in links"
      :key="link.path"
      :to="{ name: link.path }"
    >
      <BaseIcon :name="link.iconName" />
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      links: [
        { path: "Home", iconName: "home" },
        { path: "Archive", iconName: "archive" },
        { path: "Label", iconName: "collection" },
        { path: "Auth", iconName: "logout" },
      ],
    };
  },
};
</script>

<style>
.router-link-active.router-link-exact-active {
  color: rgba(139, 92, 246, 1);
}
a:hover {
  color: rgba(139, 92, 246, 1);
}
</style>
