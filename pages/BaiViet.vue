<template>
  <div>
    <b-button size="sm" variant="outline-primary" @click="showEdit = true">
      Thêm Mới Bài Viết</b-button
    >
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#ID</th>
          <th scope="col">Tiêu đề</th>

          <th scope="col">Ngày tạo</th>
          <!-- <th scope="col">
            Hành ảnh
            
          </th> -->
          <th scope="col">Tên Tác giả</th>
          <th scope="col">Hành Động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in Blog.data" :key="a.index">
          <td scope="col">{{ a.id }}</td>
          <td scope="col">{{ a.title }}</td>
          <td scope="col">{{ a.createdDate }}</td>
          <!-- <td scope="col">{{ a.image }}</td> -->
          <td scope="col">{{ a.authorName }}</td>
          <td>
            <b-button-group>
              <b-button
                size="sm"
                variant="outline-primary"
                @click="(showDetail = true), getByIdBlog(a.id)"
              >
                Chi tiết
              </b-button>

              <b-button
                size="sm"
                variant="primary"
                @click="(showEdit = true), (id = a.id)"
              >
                Sửa
              </b-button>
              <b-button variant="danger" size="sm" @click="deletE(a.id)">
                Xóa
              </b-button>
            </b-button-group>
          </td>
        </tr>
      </tbody>
      <b-pagination
        v-model="params.pageIndex"
        :total-rows="Blog.totalRows"
        :per-page="params.pageSize"
        aria-controls="my-table"
      ></b-pagination>
    </table>
    <detail
      v-if="showDetail"
      v-show="showDetail"
      @close-modal="showDetail = false"
    />
    <EditBV
      v-if="showEdit"
      v-show="showEdit"
      @close-modal="closeEdit"
      :id="id"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import detail from "../components/BaiViet/Detail.vue";
import EditBV from "../components/BaiViet/EditBaiViet.vue";
export default {
  name: "NuxtBlackDashboardMasterIcons",
  components: {
    detail,
    EditBV,
  },
  data() {
    return {
      params: {
        pageSize: 8,
        pageIndex: 1,
        status: 0,
        keyWord: "a",
      },
      showDetail: false,
      showEdit: false,
    };
  },
  computed: {
    ...mapGetters(["Blog"]),
  },
  mounted() {},
  watch: {
    "params.pageIndex"() {
      this.params.pageIndex = this.params.pageIndex ? this.params.pageIndex : 1;
      this.getBlog(this.params);
    },
  },
  created() {
    this.getBlog(this.params);
  },
  methods: {
    ...mapActions(["getBlog", "getByIdBlog", "deleteBlog"]),
    closeEdit(reload) {
      this.showEdit = false;
      this.getBlog(this.params);
      this.params.pageIndex = 1;
    },
    deletE(id) {
      this.deleteBlog(id);
      this.getBlog(this.params);
      this.params.pageIndex = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>