<template>
  <div>
    <b-row>
      <b-col cols="8">
        <b-button
          size="sm"
          variant="outline-primary"
          @click="showEdit = true"
          v-if="$hasPermission('create')"
        >
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
          style="width: 40px"
          @click="getU(params)"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path
              style="padding: 3px"
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
            />
          </svg>
        </b-button>
      </b-col>
    </b-row>
    <table class="table">
      <thead>
        <tr>
          <th scope="col" style="width: 400px">#ID</th>
          <th scope="col" style="width: 200px">FullName</th>
          <!-- <th scope="col">Role</th> -->
          <th scope="col" style="padding-left: 500px !important">Chức Năng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in User" :key="a.index">
          <td scope="col">{{ a.id }}</td>
          <td scope="col">{{ a.fullName }}</td>

          <td style="padding-left: 500px !important">
            <b-button-group>
              <b-button
                size="sm"
                @click="(showDetail = true), getByIDU(a.id)"
                v-if="$hasPermission('create')"
                >Detail</b-button
              >

              <b-button
                size="sm"
                variant="danger"
                v-if="$hasPermission('delete')"
                @click="deleteUm(a.id)"
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
      showRole: false,
      params: {
        pageSize: 6,
        pageIndex: 1,
        status: 0,
        keyWord: null,
      },
      idUer: "",
    };
  },
  components: {
    AddUser,
    DetailUser,
  },
  computed: {
    ...mapGetters(["User"]),
  },
  mounted() {
    if (!this.$hasPermission("create")) {
      this.$router.push("/GeneralViews/Error");
    }
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
<style>
</style>
