<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showRole">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body" style="width: 300px">
            <h2>Quyền đã chọn</h2>
            <div class="d-flex">
              <div
                v-for="(rol, index) in cart"
                :key="index"
                v-on:click="deleteCart(index)"
              >
                <b-button size="sm">
                  {{ rol.name }}
                </b-button>
              </div>
            </div>
            <h2>Danh sach Role</h2>
            <div class="d-flex">
              <div
                v-for="(rol, index) in roless"
                :key="index"
                v-on:click="addToCart(index)"
              >
                <b-button size="sm">{{ rol.name }}</b-button>
              </div>
            </div>
            <div></div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-role')" variant="danger"
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
  props: {
    id: {
      type: String,
      default: "",
    },
  },
  name: "Testauth",

  data() {
    return {
      showRole: true,
      slectedItems: [],
      roless: [],
      cart: [],
    };
  },
  computed: {
    ...mapGetters(["Roles"]),
  },
  created() {
    this.getDate();
    this.getRole();
  },
  mounted() {},
  methods: {
    // ...mapActions(["getByIDU", "updateU"]),
    updateUu() {
      // this.updateU({
      //   roles: this.slectedItems,
      // });
      console.log(this.cart);
    },
    addToCart(index) {
      this.roless[index].selected = true;
      this.cart.push(this.roless[index]);

      // Ẩn sản phẩm trong bảng 1
      this.roless.splice(index, 1);
    },
    deleteCart(index) {
      this.cart[index].selected = true;
      this.roless.push(this.cart[index]);

      this.cart.splice(index, 1);
    },
    ...mapActions(["getRole"]),
    getDate() {
      const ROOLe = this.Roles;
      const rolessObjectArray = ROOLe.map((role) => ({
        ...role,
        selected: false,
      }));
      this.roless = rolessObjectArray;
      this.$axios
        .get(process.env.baseApiUrl + `Authenticate/${this.id}`)
        .then((res) => {
          const dataRole = res.data.roles;
          const rolesObjectArray = dataRole.map((role) => ({
            name: role,
            selected: true,
          }));
          this.cart = rolesObjectArray;
          for (let i = 0; i < this.cart.length; i++) {
            const name = this.cart[i].name;
            const selected = this.cart[i].selected;
            const roleIndex = this.roless.findIndex((r) => r.name === name);
            if (selected) {
              if (roleIndex !== -1) {
                this.roless[roleIndex].selected = true;
              }
            } else {
              if (roleIndex !== -1) {
                this.roless[roleIndex].selected = true;
              }
            }
          }
          console.log(this.roless);
        });
    },
  },
};
</script>
  
  <style lang="scss" scoped>
</style>