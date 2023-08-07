<template>
  <h1>{{ title }}</h1>
  <!-- <input type="text" ref="name"> refs are for getting references to dom elements
  <button @click="handleClick">click me</button>-->
  <!--if component starts with lower case do not name components like footer or header not to cause confusion with html tags -->
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal"> <!--teleport this div to the div in index.html with the class modals-->
   <!-- <ModalComponent :header="header" :text="text" theme="sale" @close="toggleModal"/> the string is passed as a prop. header is a name of the prop. is we pass not a string as a prop, use attribute binding. pass the props through component obj-->
   <ModalComponent theme="sale" @close="toggleModal">
      <!-- slot content -->
      <h1>Ninja Givaway!</h1>
      <p>Grad your ninja swag for half price!</p>
      <!--named slot, name - links-->
      <template v-slot:links>
        <a href="#">sign up now</a>
        <a href="#">more info</a>
      </template>
  </ModalComponent>
  </teleport>

  <teleport to=".modals" v-if="showModalTwo">
    <ModalComponent @close="toggleModalTwo">
      <!-- slot content -->
      <h1>Sign up to the newsletter</h1>
      <p>For updates and promocodes</p>
  </ModalComponent>
  </teleport>

  <button @click.alt="toggleModal">open modal (alt)</button> <!--click event modifier. click + press alt-->
  <button @click="toggleModalTwo">open modal</button>
</template>

<script>
import ModalComponent from './components/ModalComponent.vue'
export default {
  name: 'App',
  components: { ModalComponent }, //register components
  data() {
    return {
      title: 'My First Vue App',
      showModal: false,
      showModalTwo: false,

    }
  },
  methods: {
    // handleClick() {
    //   // using refs to dom elements to manipulate them
    //   console.log(this.$refs.name) // <input type="text">
    //   this.$refs.name.classList.add('active') // Add an "active" class to an element
    //   this.$refs.name.focus() // Give focus to an element
    // }
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals { /*both for the elm with id div and the elm with the class modals */
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
