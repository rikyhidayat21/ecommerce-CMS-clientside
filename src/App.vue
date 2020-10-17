<template>
  <div id="app">
    <div id="nav text-center">
      <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center shadow">
      <a class="navbar-brand" href="#">BOLAedan</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/add-product">Add Product</router-link> | -->
      <!-- <router-link :to="{ name: 'Home' }">Logout</router-link> -->
      <!-- <router-link to="/login">Login</router-link> -->
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
