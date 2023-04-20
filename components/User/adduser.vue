<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showEdit">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1>Add new user</h1>
            <div class="form-edit">
              <a>Email</a>
              <b-input type="email" v-model="User.email" />
              <a>Password</a>
              <b-input type="password" v-model="User.password" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
            <b-button variant="outline-primary" @click="addUser()"
              >Add user</b-button
            >
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NuxtBlackDashboardMasterAdduser",

  data() {
    return {
      showEdit: true,
      User: {},
    };
  },

  methods: {
    ...mapActions(["addU"]),
    addUser() {
      this.addU({
        fullNameL: "",
        email: this.User.email,
        password: this.User.password,
      });
      this.showEdit = false;
      this.$emit("close-modal", true);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>