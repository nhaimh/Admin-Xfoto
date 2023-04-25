<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showEdit">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1 v-if="Anh.id == null">Add new Image SP</h1>
            <h1 v-else>Edit Imgae SP</h1>
            <div class="form-edit">
              <a>#ID</a>
              <b-input type="number" :disabled="true" v-model="Anh.id" />
              <a>Description</a>
              <b-input type="text" v-model="Anh.description" />
              <a>Imgae Affter</a>
              <b-input type="text" v-model="Anh.imageA" />
              <a>Image Before</a>
              <b-input type="text" v-model="Anh.imageB" />
              <a>Tác giả</a>
              <b-input type="number" v-model="Anh.sanPhamId" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
            <b-button
              variant="outline-primary"
              @click="updateeD()"
              v-if="$hasPermission('edit')"
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
  name: "NuxtBlackDashboardMasterDetailSP",
  props: ["id"],

  data() {
    return {
      showEdit: true,
    };
  },
  computed: {
    ...mapGetters(["Anh"]),
  },
  mounted() {
    this.getSPById(this.id);
  },

  methods: {
    ...mapActions(["getSPById", "addD", "UpdateD"]),
    updateeD() {
      if (this.id) {
        this.UpdateD({
          id: this.Anh.id,
          description: this.Anh.description,
          imageA: this.Anh.imageA,
          imageB: this.Anh.imageB,
          sanPhamId: this.Anh.sanPhamId,
        });
        this.showEdit = false;
        this.$emit("close-modal", true);
        return;
      }
      this.addD({
        description: this.Anh.description,
        imageA: this.Anh.imageA,
        imageB: this.Anh.imageB,
        sanPhamId: this.Anh.sanPhamId,
      });
      this.showEdit = false;
      this.$emit("close-modal", true);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>