<template>
  <!-- <nav>
  </nav> -->
  <div class="home">
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p> -->
    <!-- <p ref="p">My name is {{ name }} and my age is {{ age }}</p>
    <button @click="handleClick">click me</button>
    <button @click="age++">Add 1 to age</button>
    <input type="text" v-model="name"> two-way binding -->
    <h1>Home</h1>
    <!-- <h2>Refs</h2>
    <p>{{ ninjaOne.name }} - {{ ninjaOne.age }}</p>
    <button @click="updateNinjaOne">Update ninja one</button>
    <h2>Reactive</h2>
    <p>{{ ninjaTwo.name }} - {{ ninjaTwo.age }}</p>
    <button @click="updateNinjaTwo">Update ninja two</button> -->
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">stop watching</button>
  </div>
  <router-view/>
</template>

<script>
//for composition API we import required paths
// import { ref, reactive } from "vue"
import { computed, ref, watch, watchEffect } from "vue"

export default ({
  //composition API
  name: 'Home',
  // setup() {//this func will run before any lifecycle hook
  //   //this.$refs is not availiable for setup, "this" is undefined. instead do this:
  //   // const p = ref(null)
  //   //p.value will not be availiable untill it's retured in setup. instead of actual p.value we receive null or whatever is indicated in const

  //   //unlike values in data(), values in setup are not reactive, so if they change here, they will not change in template
  //   //to make these values reactive use refs:
  //   const name = ref('sasha')
  //   const age = ref(27)

  //   const handleClick = () => {
  //     // console.log(p.value.outerHTML)
  //     // p.value.classList.add('test') // Add a "test" class to <p>
  //     // p.value.textContent = 'Hello, ninjas' //change text inside <p>
      
  //       // using refs to make values reactive:
  //       name.value = "kisa"
  //       age.value = 17
  //   }

  //   // return { name: name, age: age } to use values inside the template. return as obj. key will be called in the template and the value is insude setup
  //   // return { name, age, handleClick, p } //properties have the same names as variables, so Instead of name:name we can just write name
  //   return { name, age, handleClick}
  // }

  // setup() {
  //   const ninjaOne = ref({ name: 'sasha', age: 27}) //we can use obj as value of refs or any data type
    
  //   //another way to make values reactive without refs:
  //   const ninjaTwo = reactive({ name: 'kisa', age: 17})
  //   //reactive doesn't work for primitive values
  //   //const nameTwo = reactive('sasha') - will not be reactive value

  //   const updateNinjaOne = () => {
  //     ninjaOne.value.age = 30
  //   }

  //   //how to update reactive:
  //   const updateNinjaTwo = () => {
  //     ninjaTwo.age = 19
  //   }
  //   return {ninjaOne, updateNinjaOne, ninjaTwo, updateNinjaTwo}
  // }

  setup() {
    //computed values in setup
    const search = ref('')
    const names = ref(['sasha', 'kisa', 'pisa', 'alex','alexandra', 'sanchez','iskander'])

    const stopWatch = watch(search, () => {
      console.log('watch function ran')
    })

    const stopEffect = watchEffect(() => {
      console.log('watchEffect function ran', search.value)
    })

    const matchingNames = computed(() => {
      //names and search are a ref objs, use value to get access to the value
      return names.value.filter((name) => name.includes(search.value))
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    return { names, search, matchingNames, handleClick }
  }
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
