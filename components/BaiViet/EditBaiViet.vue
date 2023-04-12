<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showEdit">
      <div class="modal-dialog" role="document" style="z-index: 9999999">
        <div class="modal-overlay" @click="$emit('close-modal')"></div>
        <div class="modal-content">
          <section class="modal-body">
            <h1 v-if="Blo.id == null">Add new Blog</h1>
            <h1 v-else>Edit Blog</h1>
            <div class="form-edit">
              <a>#ID</a>
              <b-input type="number" :disabled="true" v-model="Blo.id" />
              <a>Tiêu đề</a>
              <b-input type="text" v-model="Blo.title" />
              <a>Demo description</a>
              <b-input type="text" v-model="Blo.demoDescription" />
              <a>Description</a>
              <b-input type="text" v-model="Blo.description" />
              <a>Thời gian tạo</a>
              <b-input type="datetime-local" v-model="Blo.createdDate" />
              <a>Hình ảnh</a>
              <b-input type="text" v-model="Blo.image" />
              <a>ID Tác giả</a>
              <b-input type="number" v-model="Blo.atuthorId" />
              <a>Tác giả</a>
              <b-input type="text" v-model="Blo.authorName" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
            <b-button variant="outline-primary" @click="updateBlogg()"
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
  name: "NuxtBlackDashboardMasterEditBaiViet",
  props: ["id"],
  data() {
    return {
      showEdit: true,
    };
  },
  computed: {
    ...mapGetters(["Blo"]),
  },
  created() {
    this.getByIdBlog(this.id);
  },
  mounted() {},

  methods: {
    ...mapActions(["getByIdBlog", "addBlog", "UpdateBlog"]),
    updateBlogg() {
      if (this.id) {
        this.UpdateBlog({
          id: this.Blo.id,
          title: this.Blo.title,
          demoDescription: this.Blo.demoDescription,
          description: this.Blo.description,
          createdDate: this.Blo.createdDate,
          image: this.Blo.image,
          atuthorId: this.Blo.atuthorId,
          authorName: this.Blo.authorName,
        });
        this.showEdit = false;
        this.$emit("close-modal", true);
        return;
      }
      this.addBlog({
        title: this.Blo.title,
        demoDescription: this.Blo.demoDescription,
        description: this.Blo.description,
        createdDate: this.Blo.createdDate,
        image: this.Blo.image,
        atuthorId: this.Blo.atuthorId,
        authorName: this.Blo.authorName,
      });
      this.showEdit = false;
      this.$emit("close-modal", true);
    },
  },
};
</script>

<style>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: black;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 60% !important;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
}
.container {
  display: flex;
}
</style>