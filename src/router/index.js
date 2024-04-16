import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MovieDetailsPage from '../views/MovieDetailsPage.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/movie/details/:movieId', component: MovieDetailsPage, props: true },
  { path: '/movie/details', component: MovieDetailsPage, props: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
