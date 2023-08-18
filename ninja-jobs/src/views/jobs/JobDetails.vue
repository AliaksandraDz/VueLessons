<template>
  <h1>Job Details Page</h1>
  <p>The job id is {{ $route.params.id }}</p> <!--get access to the route obj-->
  <p>The job id is {{ id }}</p> <!--the 2nd way to get access to the route obj through data()-->
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
        }
    }
}
</script>

<style>

</style>