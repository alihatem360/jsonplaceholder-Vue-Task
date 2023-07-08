<template>
  <div class="home">
    <PhotoList />
  </div>
</template>

<script>
import PhotoList from "@/components/PhotoList.vue";
export default {
  name: "photo-list-view",
  components: {
    PhotoList,
  },
};
</script>
