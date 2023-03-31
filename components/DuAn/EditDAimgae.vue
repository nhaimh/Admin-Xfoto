<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showEdit">
      <div class="modal-dialog" role="document">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <header class="modal-header">
            <h3>Add/Edit</h3>
          </header>
          <section class="modal-body">
            <div class="form-edit">
              <a>#ID</a>
              <b-input type="number" :disabled="true" v-model="DAi.id" />
              <a>Imgae Affter</a>
              <b-input type="text" v-model="DAi.imageA" />
              <a>Image Before</a>
              <b-input type="text" v-model="DAi.imageB" />
              <a>Tác giả</a>
              <b-input type="number" v-model="DAi.duanId" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
            <b-button variant="outline-primary" @click="updateeI()"
              >Update</b-button
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
  name: "NuxtBlackDashboardMasterEditDAimgae",
  props: ["id"],
  data() {
    return {
      showEdit: true,
    };
  },
  computed: {
    ...mapGetters(["DAi"]),
  },
  mounted() {
    this.getByIDI(this.id);
  },

  methods: {
    ...mapActions(["getByIDI", "addI", "UpdateI"]),
    updateeI() {
      if (this.id) {
        this.UpdateI({
          id: this.DAi.id,
          imageA: this.DAi.imageA,
          imageB: this.DAi.imageB,
          duanId: this.DAi.duanId,
        });
        this.showEdit = false;
        this.$emit("close-modal", true);
        return;
      }
      this.addI({
        imageA: this.DAi.imageA,
        imageB: this.DAi.imageB,
        duanId: this.DAi.duanId,
      });
      this.showEdit = false;
      this.$emit("close-modal", true);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>