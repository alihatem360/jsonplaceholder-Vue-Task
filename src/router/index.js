import Vue from "vue";
import VueRouter from "vue-router";
import PostListView from "../views/PostListView.vue";
import PhotoListView from "../views/PhotoListView.vue";
import UserListView from "../views/UserListView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: PostListView,
  },
  {
    path: "/photos",
    name: "photos",
    component: PhotoListView,
  },
  {
    path: "/users",
    name: "users",
    component: UserListView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
