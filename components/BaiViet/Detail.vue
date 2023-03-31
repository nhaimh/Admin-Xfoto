<template>
  <div>
    <div class="fade show" tabindex="-1" role="dialog" v-if="showDetail">
      <div class="modal-dialog" role="document">
        <div class="modal-overlay" @click="$emit('close-modal')"></div>
        <div class="modal-content">
          <header class="modal-header">
            <a>Show Detail</a>
          </header>
          <section class="modal-body">
            <div class="form-edit">
              <a>#ID</a>
              <b-input type="text" :disabled="true" v-model="Blo.id" />
              <a>Tiêu đề</a>
              <b-input type="text" :disabled="true" v-model="Blo.title" />
              <a>Demo description</a>
              <b-input type="text" v-model="Blo.demoDescription" />
              <a>Description</a>
              <b-input type="text" v-model="Blo.description" />
              <a>Thời gian tạo</a>
              <b-input type="text" :disabled="true" v-model="Blo.createdDate" />
              <a>Hình ảnh</a>
              <b-input type="text" :disabled="true" v-model="Blo.image" />
              <a>ID Tác giả</a>
              <b-input type="text" :disabled="true" v-model="Blo.atuthorId" />
              <a>Tác giả</a>
              <b-input type="text" :disabled="true" v-model="Blo.authorName" />
            </div>
          </section>
          <footer class="modal-footer">
            <b-button @click="$emit('close-modal')">Close</b-button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "NuxtBlackDashboardMasterDetail",

  data() {
    return {
      showDetail: true,
    };
  },
  computed: {
    ...mapGetters(["Blo"]),
  },
  mounted() {},

  methods: {
    ...mapActions(["getByIdBlog"]),
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
  background: whitesmoke;
  padding: 20px;
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
.ttd {
  width: 100px !important;
  text-overflow: ellipsis;
  overflow: hidden;
}
.thh {
  color: black;
}
</style>