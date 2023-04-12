<template>
  <div>
    <b-row>
      <b-col cols="8">
        <b-button size="sm" variant="outline-primary" @click="showEdit = true">
          Thêm Mới SP dự án</b-button
        >
      </b-col>
      <b-col cols="4" class="d-flex">
        <b-input
          type="text"
          class="p-1 m-2"
          v-model="params.keyWord"
          style="width: 200px"
        />
        <b-button
          class="icon bg-primary text-white rounded p-1 m-2"
          @click="getImage(params)"
        >
          Tìm kiếm
        </b-button>
      </b-col>
    </b-row>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Image After</th>
          <th scope="col">Image Before</th>
          <th scope="col">Id Dự Án</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in DAimgae.data" :key="a.index">
          <td scope="col">{{ a.id }}</td>
          <td scope="col">{{ a.imageA }}</td>
          <td scope="col">{{ a.imageB }}</td>
          <td scope="col">{{ a.duanId }}</td>
          <td>
            <b-button-group>
              <b-button
                size="sm"
                variant="primary"
                @click="(showEdit = true), (id = a.id)"
              >
                Sửa
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteIm(a.id)">
                Xóa
              </b-button>
            </b-button-group>
          </td>
        </tr>
      </tbody>
      <b-pagination
        v-model="params.pageIndex"
        :total-rows="DAimgae.totalRows"
        :per-page="params.pageSize"
        aria-controls="my-table"
      ></b-pagination>
    </table>
    <EditDA
      v-if="showEdit"
      v-show="showEdit"
      @close-modal="closeEdit"
      :id="id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import EditDA from "~/components/DuAn/EditDAimgae.vue";
export default {
  name: "NuxtBlackDashboardMasterNotifications",

  data() {
    return {
      params: {
        pageSize: 3,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
      showEdit: false,
    };
  },
  components: {
    EditDA,
  },
  computed: {
    ...mapGetters(["DAimgae"]),
  },
  created() {
    this.getImage(this.params);
  },
  mounted() {},
  watch: {
    "params.pageIndex"() {
      (this.params.pageIndex = this.params.pageIndex
        ? this.params.pageIndex
        : 1),
        this.getImage(this.params);
    },
  },
  methods: {
    ...mapActions(["getImage", "deleteI"]),
    deleteIm(id) {
      this.deleteI(id);
      this.getImage(this.params);
      this.params.pageIndex = 1;
    },
    closeEdit(reload) {
      this.showEdit = false;
      this.getImage(this.params);
      this.params.pageIndex = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>