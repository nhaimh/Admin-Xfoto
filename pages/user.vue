<template>
  <div>
    <b-row>
      <b-col cols="8">
        <b-button size="sm" variant="outline-primary" @click="showEdit = true">
          Thêm Mới User</b-button
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
          @click="getU(params)"
        >
          Tìm kiếm
        </b-button>
      </b-col>
    </b-row>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 400px">#ID</th>
          <th scope="col" style="width: 200px">FullName</th>
          <th scope="col">Role</th>
          <th scope="col">Chức Năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in User" :key="a.index">
          <td scope="col">{{ a.id }}</td>
          <td scope="col">{{ a.fullName }}</td>
          <td scope="col">
            <div v-for="r in a.roles" :key="r.index">{{ r }}</div>
          </td>
          <td>
            <b-button-group>
              <b-button size="sm" @click="(showDetail = true), getByIDU(a.id)"
                >Detail</b-button
              >

              <b-button size="sm" variant="danger" @click="deleteUm(a.id)"
                >Delete</b-button
              >
            </b-button-group>
          </td>
        </tr>
      </tbody>
      <b-pagination
        v-model="params.pageIndex"
        :total-rows="User.totalRows"
        :per-page="params.pageSize"
        aria-controls=""
      ></b-pagination>
    </table>
    <AddUser v-if="showEdit" v-show="showEdit" @close-modal="closeEdit()" />
    <DetailUser
      v-if="showDetail"
      v-show="showDetail"
      @close-detail="closeDetail()"
    />
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import AddUser from "../components/User/adduser.vue";
import DetailUser from "../components/User/detailuser.vue";
export default {
  name: "user",
  data() {
    return {
      showEdit: false,
      showDetail: false,
      params: {
        pageSize: 6,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
    };
  },
  components: {
    AddUser,
    DetailUser,
  },
  computed: {
    ...mapGetters(["User"]),
  },

  watch: {
    "params.pageIndex"() {
      this.params.pageIndex = this.params.pageIndex ? this.params.pageIndex : 1;
      this.getU(this.params);
    },
  },
  created() {
    this.getU(this.params);
  },
  methods: {
    ...mapActions(["getU", "deleteU", "getByIDU"]),
    closeEdit(reload) {
      this.showEdit = false;
      this.getU(this.params);
    },
    closeDetail(reload) {
      this.showDetail = false;
      this.getU(this.params);
    },
    deleteUm(id) {
      this.deleteU(id);
      this.getU(this.params);
    },
  },
};
</script>
<style></style>
