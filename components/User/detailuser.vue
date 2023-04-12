<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showDetail">
      <div class="modal-dialog" role="document">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1>Add new user</h1>
            <div class="form-edit">
              <a>#ID</a>
              <b-input v-model="row.id"></b-input>
              <a>Username</a>
              <b-input v-model="row.username"></b-input>
              <a>Fullname</a>
              <b-input v-model="row.fullname"></b-input>
              <a>Email</a>
              <b-input v-model="row.email"></b-input>
              <a>Address</a>
              <b-input v-model="row.address"></b-input>
              <a>TokenCreated</a>
              <b-input v-model="row.tokenCreated"></b-input>
              <a>TokenExpires</a>
              <b-input v-model="row.tokenExpires"></b-input>
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
export default {
  name: "NuxtBlackDashboardMasterDetailuser",
  props: ["row"],
  data() {
    return {
      showDetail: true,
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>