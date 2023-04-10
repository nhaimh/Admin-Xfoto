<template>
  <base-table :data="tableData" thead-classes="text-primary">
    <template slot-scope="{ row }">
      <td><base-checkbox v-model="row.done"></base-checkbox></td>
      <td>
        <p class="title">{{ row.title }}</p>
        <p class="text-muted">{{ row.description }}</p>
      </td>
      <td class="td-actions text-right">
        <el-tooltip
          content="Edit task"
          effect="light"
          :open-delay="300"
          placement="top"
        >
          <base-button type="link">
            <i class="tim-icons icon-pencil"></i>
          </base-button>
        </el-tooltip>
      </td>
    </template>
  </base-table>
</template>
<script>
import { BaseTable } from "@/components";

export default {
  components: {
    BaseTable,
  },
  data() {
    return {
      tableData: [
        {
          title: "add database authentication in postgres",
          description: "07/04/2023",
          done: false,
        },
        {
          title: "Create authentication in nuxtjs",
          description: "06/04/2023",
          done: true,
        },
        {
          title: "Create authentication in API",
          description: "06/04/2023",
          done: true,
        },
      ],
    };
  },
};
</script>
<style></style>
