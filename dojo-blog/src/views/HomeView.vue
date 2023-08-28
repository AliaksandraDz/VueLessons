<template>
  <div class="home">
    <h1>Home</h1>
    <!-- <PostList :posts="posts" v-if="showPosts"/> pass "posts" value to a child component as a prop
    <button @click="showPosts = !showPosts">toggle posts</button>
    component updated (deleted)
    <button @click="posts.pop()">delete a post</button> -->
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts"/>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
// import { ref } from 'vue'
import getPosts from '../composables/getPosts' //don't need .js because it automatically knows it's js

export default {
  name: 'HomeView',
  components: { PostList },
  // setup() {
  //   const posts = ref([])
  //   const error = ref(null)

  //   const load = async () => {
  //     try {
  //       let data = await fetch('http://localhost:3000/posts')
  //       if (!data.ok) {
  //         //if we create Error here, catch will catch it
  //         throw Error('no data available')
  //       }
  //       //the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
  //       //Return value - A Promise that resolves to a JavaScript object. 
  //       posts.value = await data.json()
  //     }
  //     catch(err) {
  //       error.value = err.message // err.message is 'no data available'
  //       console.log(error.value)
  //     }start
  //   }

  //   load()

  //   // //component unmounted and mounted
  //   // const showPosts = ref(true)

  //   // return { posts, showPosts }

  //   return { posts, error }
  // }

  setup() {
    
    //grab the values which the func getPosts returnes and place them inside this object
    const { posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
  
}
</script>
