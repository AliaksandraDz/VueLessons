<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link :to="{ name: 'about'}">About</router-link> <!--attribute binding with routing is the same as in Home. Handy if URL changes-->
    <router-link :to="{ name: 'jobs'}">Jobs</router-link>
  </nav>

  <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    // Programmatic Navigation 
    redirect() {
      this.$router.push({name: 'home'})
    },
    back() {
      this.$router.go(-1) //use $router to manupulate routes. Method go(-1) - go back 1 page
    },
    forward() {
      this.$router.go(1) //go forward 1 page (automatically plus numbers)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
