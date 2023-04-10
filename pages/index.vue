<template>
  <div class="row">
    <!-- Big Chart -->

    <div class="">
      <card type="tasks" :header-classes="{ 'text-right': isRTL }">
        <div slot="header" class="d-inline">
          <h6 class="title d-inline">Tasks (5)</h6>
          <p class="card-category d-inline">Today</p>
        </div>
        <div class="table-full-width table-responsive">
          <task-list></task-list>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
import TaskList from "@/components/Dashboard/TaskList";

export default {
  name: "dashboard",
  components: {
    TaskList,
  },
  data() {
    return {};
  },
  computed: {
    enableRTL() {
      return this.$route.query.enableRTL;
    },
    isRTL() {
      return this.$rtl.isRTL;
    },
  },
  methods: {},
  mounted() {},
};
</script>
<style></style>
