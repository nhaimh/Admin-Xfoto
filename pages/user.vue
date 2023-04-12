<template>
  <div class="row">
    <div class="col-md-8">
      <b-button @click="showEdit = true"> Add New User </b-button>
      <div class="row">
        <div class="col-md-12">
          <card class="card-plain" body-classes="table-full-width">
            <el-table
              header-cell-class-name="table-transparent"
              header-row-class-name="table-transparent"
              row-class-name="table-transparent"
              :data="User"
            >
              <el-table-column
                min-width="150"
                sortable
                label="#ID"
                property="id"
              ></el-table-column>
              <el-table-column
                min-width="150"
                sortable
                label="Name"
                property="username"
              ></el-table-column>
              <el-table-column
                min-width="150"
                sortable
                label="Role"
                property="role"
              ></el-table-column>
              <el-table-column label="Operations">
                <template #default="scope">
                  <b-button
                    size="sm"
                    @click="(row = scope.row), (showDetail = true)"
                    >Detail</b-button
                  >
                  <b-button size="sm" variant="danger">Delete</b-button>
                </template>
              </el-table-column>
            </el-table>
          </card>
        </div>
      </div>
    </div>
    <AddUser v-if="showEdit" v-show="showEdit" @close-modal="closeEdit" />
    <DetailUser
      :row="row"
      v-if="showDetail"
      v-show="showDetail"
      @close-modal="closedetail"
    />
  </div>
</template>
<script>
import { Table, TableColumn } from "element-ui";
import { mapActions, mapGetters } from "vuex";

import AddUser from "../components/User/adduser.vue";
import DetailUser from "../components/User/detailuser.vue";
export default {
  name: "user",
  data() {
    return {
      showEdit: false,
      showDetail: false,
    };
  },
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
    AddUser,
    DetailUser,
  },
  computed: {
    ...mapGetters(["User"]),
  },
  created() {
    this.getU();
  },
  methods: {
    ...mapActions(["getU"]),
    closeEdit() {
      this.showEdit = false;
      this.getU();
    },
    closedetail() {
      this.showDetail = false;
    },
  },
};
</script>
<style></style>
