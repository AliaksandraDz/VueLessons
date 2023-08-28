import { ref } from 'vue'

//to get id inside this func we pass it as a parameter, and Details comp has access to id and we will call this func in the Details
const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts/' + id)
        if (!data.ok) {
          //if we create Error here, catch will catch it
          throw Error('that post does not exist')
        }
        //the result is not JSON but is instead the result of taking JSON as input and parsing it to produce a JavaScript object.
        //Return value - A Promise that resolves to a JavaScript object. 
        post.value = await data.json()
      }
      catch(err) {
        error.value = err.message // err.message is 'no data available'
        console.log(error.value)
      }
    }

    return { post, error, load }
}

export default getPost