<template>
  <div>
    <div v-if="$hasPermission('view')">
      This content is visible to users with 'view' permission.
    </div>
    <div v-if="$hasPermission('create')">
      This content is visible to users with 'edit' permission.
    </div>
    <button @click="deletePost" v-if="$hasPermission('delete')">
      Delete post
    </button>
  </div>
</template>
  
  <script>
export default {
  methods: {
    deletePost() {
      console.log(
        "User has 'delete' permission:",
        this.$hasPermission("delete")
      );
      // Xóa bài viết
    },
    // ...các method khác
  },
};
</script>