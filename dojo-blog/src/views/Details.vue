<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
</template>

<script>
import getPost from '../composables/getPost'

export default {
    //fetch the data using the id
    props: ['id'],
    //to access props in setup:
    setup(props) {
        //grab the values which the func getPost returnes and place them inside this object
        const { post, error, load } = getPost(props.id)

        load()

        console.log('details')

        return { post, error }
    }
}
</script>

<style>

</style>