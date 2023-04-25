<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showPer">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content" style="width: 440px !important">
          <section class="modal-body">
            <div class="form-edit">
              <div
                v-for="(role, roleName) in roles"
                :key="roleName"
                v-if="roleName === perRole"
              >
                <h1>Permission {{ roleName }}</h1>
                <b-form-select
                  multiple
                  size="sm"
                  id="role-select"
                  v-model="role.permissions"
                >
                  <option
                    v-for="permission in permissionss"
                    :key="permission"
                    :value="permission"
                  >
                    {{ permission }}
                  </option>
                </b-form-select>
              </div>
            </div>
          </section>
          <div></div>
          <footer class="modal-footer">
            <b-button @click="$emit('close-per')" variant="danger"
              >Close</b-button
            >
            <b-button @click="updatePer()"> Update </b-button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "PermissionRole",

  data() {
    return {
      showPer: true,
      permissionss: ["view", "create", "update", "delete"],
      roles: {
        Admin: { permissions: ["view", "create", "update", "delete"] },
        Editor: { permissions: ["view", "create", "update"] },
        User: { permissions: ["view"] },
      },
    };
  },
  props: ["perRole"],
  computed: {},
  created() {},
  mounted() {},
  methods: {
    updatePer() {
      console.log();
      this.$emit("close-per", false);
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>