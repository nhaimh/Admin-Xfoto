<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "NuxtBlackDashboardMasterLogin",
  middleware: ["guest"],
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>