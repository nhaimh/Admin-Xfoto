<template>
  <div class="row">
    <div class="col-md-8"><edit-profile-form> </edit-profile-form></div>
  </div>
</template>
<script>
import EditProfileForm from "../components/UserProfile/EditProfileForm.vue";

export default {
  name: "user",
  components: {
    EditProfileForm,
  },
};
</script>
<style></style>
