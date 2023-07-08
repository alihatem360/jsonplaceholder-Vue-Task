<template>
  <div>
    <h1>User List</h1>
    <UserList />
  </div>
</template>

<script>
import UserList from "@/components/UserList.vue";
export default {
  name: "UserListView",
  components: {
    UserList,
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
