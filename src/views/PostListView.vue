<template>
  <div class="home">
    <PostList />
  </div>
</template>

<script>
import PostList from "@/components/PostList.vue";
export default {
  name: "post-list-view",
  components: {
    PostList,
  },
};
</script>
