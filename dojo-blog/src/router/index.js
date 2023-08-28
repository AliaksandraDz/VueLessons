import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '../views/Details.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/posts/:id', // :parameter name - a route parameter. Whatever you write in browser in the URL after http://localhost:8080/jobs/ will become id
    name: 'details',
    component: Details,
    props: true //to accept route params as props
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router