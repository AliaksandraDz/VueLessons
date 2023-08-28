<template>
  <div class="post">
    <!--about :to: attribute binding with routing. Handy if URL changes-->
    <!--about params: pass a route parameter id - the id of the current job we are iterating. pass as obj-->
    <router-link :to="{ name: 'details', params: { id: post.id } }">
        <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
    #{{ tag }}
    </span>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: ['post'],
    setup(props) {
        //create a snippet of text to appear on page. Just first 100 chars
        const snippet = computed(() => {
            return props.post.body.substring(0, 100) + '...'
        })

        return {snippet}
    }
}
</script>

<style>

</style>