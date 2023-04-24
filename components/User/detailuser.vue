<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showDetail">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1>Detail User</h1>
            <div class="form-edit">
              <a>#ID</a>
              <b-input v-model="user.id"></b-input>
              <a>Fullname</a>
              <b-input v-model="user.fullName"></b-input>
              <a>UserName</a>
              <b-input v-model="user.userName" type="email"></b-input>
              <a>Email</a>
              <b-input v-model="user.email" type="email"></b-input>
              <a>emailConfirmed</a>
              <b-input v-model="user.emailConfirmed" type="boolean"></b-input>
              <a>PhoneNumber</a>
              <b-input v-model="user.phoneNumber"></b-input>
              <a>PhoneNumberConfirmed</a>
              <b-input
                v-model="user.phoneNumberConfirmed"
                type="boolean"
              ></b-input>
              <label for="role-select">Select Authorization Role</label>
              <b-form-select
                size="sm"
                id="role-select"
                v-model="user.roles"
                multiple
              >
                <option
                  v-for="role in Roles"
                  :key="role.index"
                  :value="role.name"
                >
                  {{ role.name }}
                </option>
              </b-form-select>
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-detail')" variant="danger"
              >Close</b-button
            >
            <b-button @click="updateUu()"> Update </b-button>
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
      showRole: false,
      showDetail: true,
      slectedItems: "user",
    };
  },
  computed: {
    ...mapGetters(["user", "Roles"]),
  },
  created() {
    this.getRole();
  },
  mounted() {},
  methods: {
    ...mapActions(["getByIDU", "updateU", "getRole"]),
    updateUu() {
      this.updateU({
        id: this.user.id,
        userName: this.user.email,
        fullName: this.user.fullName,
        email: this.user.email,
        phoneNumber: this.user.phoneNumber,
        emailConfirmed: this.user.emailConfirmed,
        phoneNumberConfirmed: this.user.phoneNumberConfirmed,
        roles: this.user.roles,
      });
      this.showDetail = false;
      this.$emit("close-detail", true);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>