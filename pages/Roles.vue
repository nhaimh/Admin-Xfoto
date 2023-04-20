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
          </tr>
        </thead>
        <tbody>
          <tr v-for="a in Roles" :key="a.index">
            <td scope="col">{{ a.id }}</td>
            <td scope="col">{{ a.name }}</td>
            <td scope="col">{{ a.normalizedName }}</td>
            <td scope="col">{{ a.concurrencyStamp }}</td>
            <td>
              <!-- <b-button-group>
                    <b-button size="sm" @click="(showDetail = true), getByIDU(a.id)"
                      >Detail</b-button
                    >
      
                    <b-button size="sm" variant="danger" @click="deleteUm(a.id)"
                      >Delete</b-button
                    >
                  </b-button-group> -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AdminXfotoRoles",

  data() {
    return {};
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
  },
};
</script>

<style lang="scss" scoped>
</style>