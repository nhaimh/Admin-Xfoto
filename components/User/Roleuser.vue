<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showRole">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <select v-model="slectedItems" multiple>
              <option value="r" v-for="r in user.roles" :key="r.index">
                {{ r }}
              </option>
            </select>
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
  name: "AdminXfotoRoleuser",

  data() {
    return {
      showRole: true,
      slectedItems: [],
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
        roles: this.slectedItems,
      });
      this.showRole = false;
      this.$emit("close-role", true);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>