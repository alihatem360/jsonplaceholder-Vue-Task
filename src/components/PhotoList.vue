<template>
  <div>
    <div class="filter">
      <input
        v-model="filterText"
        type="text"
        placeholder="Filter photos"
        class="input"
      />
    </div>
    <div v-if="loading" class="loader">Loading...</div>
    <div v-else class="photo-list">
      <div v-for="photo in filteredPhotos" :key="photo.id">
        <h2>{{ photo.title }}</h2>
        <img :src="photo.thumbnailUrl" :alt="photo.title" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PhotoList",
  data() {
    return {
      loading: true,
      photos: [],
      filterText: "",
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredPhotos() {
      if (this.filterText) {
        const filterTextLowerCase = this.filterText.toLowerCase();
        return this.photos.filter((photo) =>
          photo.title.toLowerCase().includes(filterTextLowerCase)
        );
      } else {
        return this.photos;
      }
    },
  },
  methods: {
    fetchData() {
      const url = "https://jsonplaceholder.typicode.com/photos";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.photos = data;
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
.filter {
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 50%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.filter > input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #000;
}

.filter > input::placeholder {
  color: #000;
}
.loader {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 20px;
}

.photo-list {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px;
  flex-wrap: wrap;
}
.photo-list > div {
  width: 300px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  min-height: 400px;
}

.photo-list > div > img {
  width: 100%;
  height: auto;
}
</style>
