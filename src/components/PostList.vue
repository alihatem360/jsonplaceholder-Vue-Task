<template>
  <div class="post-list">
    <div v-if="loading" class="loader">Loading...</div>
    <div v-for="post in posts" :key="post.id">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostList",
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = "https://jsonplaceholder.typicode.com/posts";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.posts = data;

          this.loading = false;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.post-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-wrap: wrap;
}

.post-list > div {
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  min-height: 300px;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 20px;
}
</style>
