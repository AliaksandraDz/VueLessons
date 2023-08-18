<template>
    <div v-if="job">
        <h1>{{ job.title }}</h1>
        <p>The job id is {{ $route.params.id }}</p> <!--get access to the route obj-->
        <p>The job id is {{ id }}</p> <!--the 2nd way to get access to the route obj through data()-->
        <p>{{ job.details }}</p>
    </div>
    <div v-else>
        <p>Loading job details...</p>
    </div>
</template>

<script>
export default {
    props: ['id'], //access to the route params
    // data() {
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
    data() {
        return {
            job: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)//returnes an obj with json data included
        .then(res => res.json()) // to get the response body, we need to use an additional method call (parse the response as JSON)
        .then(data => this.job = data)//here we have acccess to the parsed response. we populate jobs[] with the received data
        .catch(err => console.log(err.message))
    
    }
}
</script>

<style>

</style>