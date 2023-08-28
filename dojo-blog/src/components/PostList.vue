<template>
  <div class="post-list"> <!--  div.post-list for auto fill-->
    <div v-for="post in posts" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from 'vue'
import SinglePost from './SinglePost.vue'

export default {
    props: ['posts'],
    components: { SinglePost },
    //to access props in setup:
    //lifecycle hooks in setup use "on" before the hook name and should be imported:
    //press enter after you write the name of the hook to auto fill import
    setup(props) {
      onMounted(() => console.log('component mounted'))
      onUnmounted(() => console.log('component unmounted'))
      onUpdated(() => console.log('component updated'))
    },
    //we still can use lifecycle hooks in options api:
    mounted() {
      console.log('mounted using options api')
    }
}
</script>

<style>

</style>