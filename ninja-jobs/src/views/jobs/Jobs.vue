<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length"> <!--check if jobs have already mounted-->
    <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'jobDetails', params: { id: job.id}}"> <!--pass a route parameter id - the id of the current job we are iterating. pass as obj-->
        <h2>{{ job.title }}</h2>
      </router-link>
    </div>
  </div>
  <div v-else>
    <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []
        }
    },
    mounted() {
      fetch('http://localhost:3000/jobs')//returnes an obj with json data included
        .then(res => res.json()) // to get the response body, we need to use an additional method call (parse the response as JSON)
        .then(data => this.jobs = data)//here we have acccess to the parsed response. we populate jobs[] with the received data
        .catch(err => console.log(err.message))
      }

}
</script>

<style>
    .job h2 {
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover {
        background: #ddd;
    }
    .job a {
        text-decoration: none;
    }
</style>