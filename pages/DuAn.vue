<template>
  <div class="row">
    <div class="col-md-12">
      <card class="card-plain" body-classes="table-full-width">
        <template slot="header">
          <h4 class="card-title">Dự Án</h4>
        </template>
        <el-table
          header-cell-class-name="table-transparent"
          header-row-class-name="table-transparent"
          row-class-name="table-transparent"
          :data="Duans"
        >
          <el-table-column
            min-width="150"
            sortable
            label="#ID"
            property="id"
            width="80"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Name"
            property="name"
            width="120"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Description"
            property="description"
            width="460"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Image Affter"
            property="image"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            align="right"
            header-align="right"
            label="Image Before"
            property="imageB"
          ></el-table-column>
        </el-table>
      </card>
    </div>
  </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "NuxtBlackDashboardMasterGoogle",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["Duans"]),
  },
  created() {
    this.getDuans();
  },
  mounted() {},

  methods: {
    ...mapActions(["getDuans"]),
  },
};
</script>

<style >
.table-transparent {
  background-color: transparent !important;
}
</style>