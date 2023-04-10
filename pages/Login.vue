<template>
  <div class="row">
    <div class="col-3"></div>
    <div class="col-6 form-input">
      <a
        slot="header"
        class="title"
        style="color: aliceblue !important; font-size: 100px"
        >Login</a
      >
      <br />
      <br />
      <div>
        <div class="row">
          <div class="">
            <h4>Username</h4>
            <b-input
              type="text"
              label="Username"
              placeholder="Username"
              v-model="username"
            >
            </b-input>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="">
            <h4>Password</h4>

            <b-input
              type="password"
              label="password"
              placeholder="password"
              v-model="password"
            >
            </b-input>
          </div>
        </div>
        <br />
        <base-button
          native-type="submit"
          type="primary"
          class="btn-fill"
          @click="submitForm()"
        >
          Save
        </base-button>
      </div>
    </div>
    <div class="col-3"></div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";

export default {
  name: "NuxtBlackDashboardMasterLogin",
  layout: "login",
  middleware: ["guest"],
  data() {
    return {
      username: "",
      password: "",
    };
  },

  methods: {
    ...mapMutations(["SET_TOKEN"]),
    ...mapActions(["userLogin"]),
    submitForm() {
      if (!this.username || !this.password) {
        alert("Please fill all the field");
      } else {
        const datas = {
          userName: this.username,
          password: this.password,
        };
        this.userLogin(datas).then(() => {
          this.$router.push("/");
        });
      }
    },
  },
};
</script>

<style >
.form-input {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
}
</style>