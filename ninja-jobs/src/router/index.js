import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id', // :parameter name - a route parameter. Whatever you write in browser in the URL after http://localhost:8080/jobs/ will become id
    name: 'jobDetails',
    component: JobDetails,
    props: true //to accept route params as props
  },
  //redirect
  {
    path: '/all-jobs',
    redirect: 'jobs',
  },
  //catch all 404
  {
    path: '/:catchAll(.*)', //regex pattern, not func. Will catch any route not above-mentioned
    name: 'notFound',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
