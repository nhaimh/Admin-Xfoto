<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showDetail">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1>Add new user</h1>
            <div class="form-edit">
              <a>#ID</a>
              <b-input v-model="user.id"></b-input>
              <a>Username</a>
              <b-input v-model="user.username"></b-input>
              <a>Fullname</a>
              <b-input v-model="user.fullname"></b-input>
              <a>Email</a>
              <b-input v-model="user.email"></b-input>
              <a>Address</a>
              <b-input v-model="user.address"></b-input>
              <a>TokenCreated</a>
              <b-input v-model="user.tokenCreated"></b-input>
              <a>TokenExpires</a>
              <b-input v-model="user.tokenExpires"></b-input>
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NuxtBlackDashboardMasterDetailuser",
  data() {
    return {
      showDetail: true,
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {},
  methods: {
    ...mapActions(["getByIDU"]),
  },
};
</script>

<style lang="scss" scoped>
</style>