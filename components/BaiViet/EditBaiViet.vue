<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showEdit">
      <div class="modal-dialog" role="document">
        <div class="modal-overlay" @click="$emit('close-modal')"></div>
        <div class="modal-content">
          <header class="modal-header">
            <h3>Modal Title</h3>
            <b-button @click="$emit('close-modal')" variant="danger"
              >X</b-button
            >
          </header>
          <section class="modal-body">
            <div class="form-edit">
              <a>#ID</a>
              <b-input type="text" v-model="Blo.id" />
              <a>Tiêu đề</a>
              <b-input type="text" v-model="Blo.title" />
              <a>Demo description</a>
              <b-input type="text" v-model="Blo.demoDescription" />
              <a>Description</a>
              <b-input type="text" v-model="Blo.description" />
              <a>Thời gian tạo</a>
              <b-input type="text" v-model="Blo.createdDate" />
              <a>Hình ảnh</a>
              <b-input type="text" v-model="Blo.image" />
              <a>ID Tác giả</a>
              <b-input type="text" v-model="Blo.atuthorId" />
              <a>Tác giả</a>
              <b-input type="text" v-model="Blo.authorName" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')" variant="danger"
              >Close</b-button
            >
            <b-button variant="outline-primary" @click="UpdateBlog(Blo.id, Blo)"
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

  data() {
    return {
      showEdit: true,
    };
  },
  computed: {
    ...mapGetters(["Blo"]),
  },
  mounted() {},

  methods: {
    ...mapActions(["getByIdBlog", "addBlog", "UpdateBlog"]),
    updateBlog(id) {
      console.log(id);
      if (this.Blo.id) {
        this.UpdateBlog(this.Blo.id, {
          id: this.Blo.id,
          title: this.Blo.title,
          demoDescription: this.Blo.demoDescription,
          description: this.Blo.description,
          createdDate: this.Blo.createdDate,
          image: this.Blo.image,
          atuthorId: this.Blo.atuthorId,
          authorName: this.authorName,
        });
        return;
      }
      this.addBlog({
        id: this.Blo.id,
        title: this.Blo.title,
        demoDescription: this.Blo.demoDescription,
        description: this.Blo.description,
        createdDate: this.Blo.createdDate,
        image: this.Blo.image,
        atuthorId: this.Blo.atuthorId,
        authorName: this.authorName,
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