<template>
  <div id="app">
    <nav>
      <router-link to="/">all posts</router-link> |
      <router-link to="/photos">all photos</router-link> |
      <router-link to="/users">all users</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  color: #fff;
}
body {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-color: #222121;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
