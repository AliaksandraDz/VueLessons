<template>
  <main>

    <!--heading-->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Tasks</h1>
    </header>

    <!--form-->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!--filter-->
    <nav class="filter">
      <button @click="filter = 'all'">all tasks</button>
      <button @click="filter = 'favs'">favorites</button>
    </nav>

    <!--loading-->
    <div class="loading" v-if="loading">Loading tasks...</div>

    <!--task list-->
    <div class="task-list" v-if="filter === 'all'">
      <p>you have {{ totalCount }} tasks</p>
      <div v-for="task in tasks" :key="task">
        <TaskDetails :task="task" /> <!--passing a task as a prop-->
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>you have {{ favCount }} favorites</p>
      <div v-for="task in favs" :key="task">
        <TaskDetails :task="task" /> <!--passing a task as a prop-->
      </div>
    </div>

    <!--reset state - take it to the original default value as specified in state-->
    <button @click="taskStore.$reset">reset state</button>

  </main>
</template>

<script>
  import { ref } from 'vue'
  import TaskDetails from './components/TaskDetails.vue'
  import TaskForm from './components/TaskForm.vue'
  import { useTaskStore } from './stores/TaskStore'
  import { storeToRefs } from 'pinia'

  export default {
    components: { TaskDetails, TaskForm },
    setup () {
      const taskStore = useTaskStore()

      //storeToRefs hook - get all state properties and getters from a store and create refs out of those
      //now we can use 'totalCount' instead of 'taskStore.totalCount'
      const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

      //fetch tasks
      taskStore.getTasks()

      const filter = ref('all')

      return { taskStore, filter, tasks, loading, favs, totalCount, favCount }
    }
  }
</script>