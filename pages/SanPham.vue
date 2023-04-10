<template>
  <div class="row">
    <div class="col-md-12">
      <card class="card-plain" body-classes="table-full-width">
        <el-table
          header-cell-class-name="table-transparent"
          header-row-class-name="table-transparent"
          row-class-name="table-transparent"
          :data="SanPham"
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
            property="name"
          ></el-table-column>
          <el-table-column
            min-width="150"
            sortable
            label="Description"
            property="description"
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
  name: "NuxtBlackDashboardMasterRegular",
  components: {
    [Table.name]: Table,
    [TableColumn.name]: TableColumn,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["SanPham"]),
  },
  created() {
    this.getSanPham();
  },
  mounted() {},

  methods: {
    ...mapActions(["getSanPham"]),
  },
};
</script>

<style lang="scss" scoped>
</style>