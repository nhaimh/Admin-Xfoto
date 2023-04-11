<template>
  <div>
    <b-row>
      <b-col cols="8">
        <b-button size="sm" variant="outline-primary" @click="showEdit = true">
          Thêm Mới Image SP</b-button
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
          @click="getSPd(params)"
        >
          Tìm kiếm
        </b-button>
      </b-col>
    </b-row>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Descrition</th>
          <th scope="col">Image After</th>
          <th scope="col">Image Before</th>
          <th scope="col">Id Sản Phẩm</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in SanPhamDetail.data" :key="a.index">
          <td scope="col">{{ a.id }}</td>
          <td scope="col">{{ a.description }}</td>
          <td scope="col">{{ a.imageA }}</td>
          <td scope="col">{{ a.imageB }}</td>
          <td scope="col">{{ a.sanPhamId }}</td>
          <td>
            <b-button-group>
              <b-button
                size="sm"
                variant="primary"
                @click="(showEdit = true), (id = a.id)"
              >
                Sửa
              </b-button>
              <b-button variant="danger" size="sm" @click="deleteSP(a.id)">
                Xóa
              </b-button>
            </b-button-group>
          </td>
        </tr>
      </tbody>
      <b-pagination
        v-model="params.pageIndex"
        :total-rows="SanPhamDetail.totalRows"
        :per-page="params.pageSize"
        aria-controls="my-table"
      ></b-pagination>
    </table>
    <detailSP
      v-if="showEdit"
      v-show="showEdit"
      @close-modal="closeEdit"
      :id="id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import detailSP from "~/components/SanPham/DetailSP.vue";
export default {
  name: "NuxtBlackDashboardMasterTypography",

  data() {
    return {
      params: {
        pageSize: 10,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
      showEdit: false,
    };
  },
  components: {
    detailSP,
  },
  computed: {
    ...mapGetters(["SanPhamDetail"]),
  },
  created() {
    this.getSPd(this.params);
  },
  mounted() {},
  watch: {
    "params.pageIndex"() {
      (this.params.pageIndex = this.params.pageIndex
        ? this.params.pageIndex
        : 1),
        this.getSPd(this.params);
    },
  },
  methods: {
    ...mapActions(["getSPd", "deleteD"]),
    deleteSP(id) {
      this.deleteD(id);
      this.getSPd(this.params);
      this.params.pageIndex = 1;
    },
    closeEdit(reload) {
      this.showEdit = false;
      this.getSPd(this.params);
      this.params.pageIndex = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>