<template>
  <div class="p-4 flex justify-around items-center">
    <RouterLink
      v-for="link in links.slice(0, 3)"
      :key="link.path"
      :to="{ name: link.path }"
    >
      <BaseIcon :name="link.iconName" />
    </RouterLink>
    <RouterLink :to="{ name: links[3].path }" @click="logout">
      <BaseIcon :name="links[3].iconName" />
    </RouterLink>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

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
  methods: {
    ...mapMutations("auth", ["SET_USER_LOGOUT"]),
    logout() {
      this.SET_USER_LOGOUT();
    },
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
