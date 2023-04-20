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
            <h4>email</h4>
            <b-input
              type="email"
              label="Username"
              placeholder="Username"
              v-model="email"
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
      email: "",
      password: "",
    };
  },

  methods: {
    ...mapMutations(["SET_TOKEN"]),
    ...mapActions(["userLogin"]),
    submitForm() {
      if (!this.email || !this.password) {
        alert("Please fill all the field");
      } else {
        const datas = {
          email: this.email,
          password: this.password,
        };
        this.userLogin(datas).then(() => {
          alert("Dang nhap thanh cong");
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