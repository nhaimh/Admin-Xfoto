<template>
  <div>
    <h1>Roles</h1>
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col" style="width: 400px">#ID</th>
            <th scope="col" style="width: 200px">Name</th>
            <th scope="col">normalizedName</th>
            <th scope="col">concurrencyStamp</th>
            <th scope="col">Permission</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in Roles" :key="a.index">
            <td scope="col">{{ a.id }}</td>
            <td scope="col">{{ a.name }}</td>
            <td scope="col">{{ a.normalizedName }}</td>
            <td scope="col">{{ a.concurrencyStamp }}</td>
            <td>
              <b-button size="sm" @click="(showPer = true), (perRole = a.name)">
                Detail
              </b-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <Permission
      v-if="showPer"
      v-show="showPer"
      @close-per="closePer()"
      :perRole="perRole"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Permission from "../components/User/Permission.vue";
export default {
  name: "AdminXfotoRoles",

  data() {
    return {
      showPer: false,
    };
  },
  components: {
    Permission,
  },
  computed: {
    ...mapGetters(["Roles"]),
  },
  created() {
    this.getRole();
  },
  mounted() {},

  methods: {
    ...mapActions(["getRole"]),
    closePer() {
      this.showPer = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>