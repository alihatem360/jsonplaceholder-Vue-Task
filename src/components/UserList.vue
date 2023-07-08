<template>
  <div class="user-list">
    <div v-if="loading" class="loader">Loading...</div>
    <div v-for="user in users" :key="user.id" class="user-card">
      <h2 class="user-name">{{ user.name }}</h2>
      <p class="user-email">{{ user.email }}</p>
      <p class="user-address">
        {{ user.address.street }}, {{ user.address.city }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserList",
  data() {
    return {
      users: [],
      loading: true,
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      const url = "https://jsonplaceholder.typicode.com/users";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.users = data;
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
.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.user-card {
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  margin: 16px;
}

.user-name {
  font-size: 20px;
  margin: 0;
}

.user-email,
.user-address {
  margin-top: 8px;
  margin-bottom: 0;
}

.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 20px;
}
</style>
