import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Leaders from '../views/Leaders.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/leaders',
    name: 'Leaders',
    component:Leaders
  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
