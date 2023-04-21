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
              <b-input v-model="user.userName"></b-input>
              <a>Email</a>
              <b-input v-model="user.email"></b-input>
              <a>emailConfirmed</a>
              <b-input v-model="user.emailConfirmed"></b-input>
              <a>PhoneNumber</a>
              <b-input v-model="user.phoneNumber"></b-input>
              <a>PhoneNumberConfirmed</a>
              <b-input v-model="user.phoneNumberConfirmed"></b-input>
              <a>Roles</a>
              <b-button
                @click="(showRole = true), (slectedItems = user.id)"
              ></b-button>
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
    <Role
      v-if="showRole"
      v-show="showRole"
      :id="slectedItems"
      @close-role="showRole = false"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Role from "./Role.vue";

export default {
  name: "NuxtBlackDashboardMasterDetailuser",
  components: {
    Role,
  },
  data() {
    return {
      showRole: false,
      showDetail: true,
      slectedItems: "",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  mounted() {},
  methods: {
    ...mapActions(["getByIDU", "updateU"]),
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