import { ref } from 'vue'

const getPosts = () => {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          //if we create Error here, catch will catch it
          throw Error('no data available')
        }
        //the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
        //Return value - A Promise that resolves to a JavaScript object. 
        posts.value = await data.json()
      }
      catch(err) {
        error.value = err.message // err.message is 'no data available'
        console.log(error.value)
      }
    }

    return { posts, error, load }
}

export default getPosts