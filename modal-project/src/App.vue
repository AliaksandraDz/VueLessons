<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name"> refs are for getting references to dom elements
  <button @click="handleClick">click me</button>-->
  <testModal /> <!--if component starts with lower case do not name components like footer or header not to cause confusion with html tags -->
</template>

<script>
import testModal from './components/testModal.vue'
export default {
  name: 'App',
  components: { testModal }, //register components
  data() {
    return {
      title: 'My First Vue App'
    }
  },
  methods: {
    handleClick() {
      // using refs to dom elements to manipulate them
      console.log(this.$refs.name) // <input type="text">
      this.$refs.name.classList.add('active') // Add an "active" class to an element
      this.$refs.name.focus() // Give focus to an element
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
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
